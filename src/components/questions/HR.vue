<template lang="pug">
  .question
    .adjust
      h3(ref="input1111") {{fileName}}
      .quote(v-for="(question, questionIndex) in fileData.questions")
        Table(:hover="false", :data="item.data", :type="item.type", v-for="(item, index) in question.q", :key="item.data + index" :id="'table'+index", :class="{'tableOdd':index%2 != 1}", :tag="fileName + questionIndex + index")
      .alert(v-if="isError") {{errorMsg}}
      .btn(v-if="isUploadPage", @click="submit") send
</template>

<script>
import Table from "../../components/Table";
import questionField from "../../assets/questionData/hr";
import { mapState } from "vuex";
import hr from "../../assets/questionData/hr";
import EngMain from "../../assets/questionData/eng&main";
import CumSer from "../../assets/questionData/cumser";
import PubRel from "../../assets/questionData/pubrel";
import axios from "axios";

export default {
  props: {
    fileData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    fileName: {
      required: true,
      type: String,
      default: "No Table"
    },
    isUploadPage: {
      type: Boolean,
      default: false
    },
    showChart: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Table
  },
  methods: {
    submit() {
      // eslint-disable-next-line no-unused-vars
      this.isFormNull();
      if (!this.altJson(this.nowForm).status) {
        console.log("hasnull");
        return;
      } else {
        this.isError = false;
        this.errorMsg = "some empty";
      }
      console.log(this.altJson(this.nowForm));
      this.uploadJson(this.altJson(this.nowForm));
    },
    async uploadJson(data) {
      console.log("upload");
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          `https://csrweb.ahkui.com/api/form/${this.nowForm}`,
          {
            data: data.uploadExcel
          }
        );
        console.log(response);
        if (response.data.status) {
          this.isError = true;
          this.errorMsg = "Upload Success";
        } else {
          this.isError = true;
          this.errorMsg = "Upload Fail. Check Your Internet.";
        }
      } catch (error) {
        console.error(error);
      }
    },
    isFormNull() {
      var inp = document.querySelectorAll("input");
      var tex = document.querySelectorAll("textarea");
      var state = false;
      inp.forEach(item => {
        if (item.value == "") {
          console.log("n number");
          item.classList.add("redinput");
          this.isError = true;
          this.errorMsg = "some empty";
          state = true;
        } else {
          item.classList.remove("redinput");
        }
      });
      tex.forEach(item => {
        if (item.value == "") {
          console.log("n text");

          item.classList.add("redinput");
          this.isError = true;
          this.errorMsg = "some empty";
          state = true;
        } else {
          item.classList.remove("redinput");
        }
      });
      return state;
    },
    altJson(formName) {
      var data = {};
      switch (formName) {
        case "hr":
          data = hr.getUploadJson(this.UploadData);
          break;
        case "ENG&MAIN":
          data = EngMain.getUploadJson(this.UploadData);
          break;
        case "CumSer":
          data = CumSer.getUploadJson(this.UploadData);
          break;
        case "PubRel":
          data = PubRel.getUploadJson(this.UploadData);
          break;
      }
      return data;
    }
  },
  computed: {
    ...mapState({
      InputTitle: "InputTitle",
      nowForm: "nowForm",
      userData: "userData",
      UploadData: "UploadData",
      blackBg: "blackBg"
    })
  },
  watch: {
    blackBg: {
      // eslint-disable-next-line no-unused-vars
      handler(val, oldval) {
        this.errorMsg = "";
        this.isError = false;
      }
    },
    fileData: {
      handler(val) {
        console.log(val);
      }
    }
  },
  mounted() {},
  data() {
    return {
      questionTitle: [
        ["Staff Head Count", "2", "bold"],
        ["Male", "1", "normal"],
        ["Female", "1", "normal"]
      ],
      test: "input",
      isError: false,
      errorMsg: "",
      questions: questionField.excelData,
      questionField: [
        ["Directors", "2", "bold"],
        ["", "1", "normal"],
        ["", "1", "normal"]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  .adjust {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

.tableOdd {
  border-radius: 6px;
  background-color: rgb(246, 246, 246);
}

.btn {
  border: 1px solid #42b983;
  margin-bottom: 40px;
  width: 100px;
  padding: 5px 20px;
  color: #42b983;
  cursor: pointer;
  align-self: center;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: #42b983;
  }
}

.alert {
  font-weight: bold;
  color: red;
}
</style>

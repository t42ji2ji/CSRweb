<template lang="pug">
  .question
    .adjust
      h3 {{fileName}}
      .datePicker(v-if="datepicker")
        .title <b>Period: </b>
        vc-date-picker(mode="range" v-model="date" color="green" ) 
      .datePicker(v-else="datepicker") 
        .title <b>Period: </b> {{Formate_date}} 
      .quote(v-for="(question, questionIndex) in fileData.questions")
        Table(:hover="false", :data="item.data", :type="item.type", v-for="(item, index) in question.q", :key="item.data + index" :id="'table'+index", :class="{'tableOdd':index%2 != 1}", :tag="fileName + questionIndex + index", @addRow="addRow", :questionIndex="questionIndex", :qIndex="index", @editRow="editRow", @handleDeletRow="handleDeletRow", :deletRow="(item.type ==='input' || item.type === 'text')", @editValue="editValue")
      .alert(v-if="isError") {{errorMsg}}

      .btn(v-if="isUploadPage && uploadVisible", @click="submit") Save
</template>

<script>
import Table from "../../components/Table";
import questionField from "../../assets/questionData/hr";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import lodash from "lodash";
import dayjs from "dayjs";

export default {
  props: {
    fileData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    datepicker: {
      type: Boolean,
      default: false
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
    },
    isAnalysisPage: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Table
  },
  methods: {
    ...mapActions({
      changeUploadVisible: "changeUploadVisible"
    }),
    addRow(arg) {
      var value = lodash.cloneDeep(this.fileData.questions[arg].s);
      console.log(value);
      var index = this.fileData.questions[arg].q.length;
      this.fileData.questions[arg].q.splice(index - 2, 0, value);
    },
    editValue(questionIndex, qIndex, index, value) {
      this.fileData.questions[questionIndex].q[qIndex].data[
        index + 1
      ][0] = value;
    },
    editRow(data, questionIndex, qIndex) {
      this.fileData.questions[questionIndex].q[qIndex].data[0][0] = data;
    },
    handleDeletRow(questionIndex, qIndex) {
      this.fileData.questions[questionIndex].q.splice(qIndex, 1);
    },
    getSubmitData() {
      var sumbitData = lodash.cloneDeep(this.fileData);
      sumbitData.fileConfig.date = this.date;
      sumbitData.questions.forEach((val, index, array) => {
        val.q.forEach((qval, qindex) => {
          if (qval.type === "input") {
            array[index].q[qindex].type = "normal";
          } else if (qval.type === "text") {
            array[index].q[qindex].type = "textview";
          } else if (qval.type === "add") {
            array[index].q.splice(qindex, 1);
          }
        });
      });
      return sumbitData;
    },
    submit() {
      // eslint-disable-next-line no-unused-vars
      if (!this.isAnalysisPage) {
        if (this.isFormNull()) {
          return;
        }
      }
      this.uploadJson(this.getSubmitData());
      console.log(this.getSubmitData());
    },
    async uploadJson(data) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          `https://csrweb.ahkui.com/api/form/${this.nowForm}`,
          {
            data: data
          }
        );
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
      this.isError = false;
      var inp = document.querySelectorAll(".question > input");
      var tex = document.querySelectorAll(".question > textarea");
      var state = false;
      inp.forEach(item => {
        if (item.value == "") {
          item.classList.add("redinput");
          this.isError = true;
          this.errorMsg = "Warning: Incomplete Information ";
          state = true;
        } else {
          item.classList.remove("redinput");
        }
      });
      tex.forEach(item => {
        if (item.value == "") {
          item.classList.add("redinput");
          this.isError = true;
          this.errorMsg = "Warning: Incomplete Information ";
          state = true;
        } else {
          item.classList.remove("redinput");
        }
      });
      return state;
    }
  },
  computed: {
    ...mapState({
      InputTitle: "InputTitle",
      nowForm: "nowForm",
      userData: "userData",
      UploadData: "UploadData",
      blackBg: "blackBg",
      uploadVisible: "uploadVisible"
    }),
    Formate_date() {
      if (this.fileData.fileConfig.date == undefined) {
        return "";
      } else {
        var dt = `${dayjs(this.fileData.fileConfig.date.start).format(
          "YYYY/MM/DD"
        )} - ${dayjs(this.fileData.fileConfig.date.end).format("YYYY/MM/DD")}`;
        return dt;
      }
    }
  },
  watch: {
    blackBg: {
      // eslint-disable-next-line no-unused-vars
      handler(val, oldval) {
        this.errorMsg = "";
        this.isError = false;
      }
    }
  },
  mounted() {},
  data() {
    return {
      date: "",
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
    h3 {
      text-align: left;
    }
  }
}

.tableOdd {
  border-radius: 6px;
  background-color: rgb(246, 246, 246);
}

.btn {
  border: 1px solid #42b983;
  margin-bottom: 40px;
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
  text-align: center;
  color: red;
}

.datePicker {
  display: flex;
  align-content: center;
  margin-bottom: 10px;
  .title {
    text-align: center;
    line-height: 32px;
    margin-right: 10px;
  }
}
</style>

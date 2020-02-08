<template lang="pug">
  .question
    .adjust
      h3(ref="input1111") {{fileName}}
      .quote(v-for="(question, questionIndex) in fileData.questions")
        Table(:hover="false", :data="item.data", :type="item.type", v-for="(item, index) in question.q", :key="index" :id="'table'+index", :class="{'tableOdd':index%2 != 1}", :tag="fileName + questionIndex + index")
      .btn(v-if="isUploadPage", @click="testF") send

</template>

<script>
import Table from "../../components/Table";
import questionField from "../../assets/questionData/hr";
import { mapState } from "vuex";

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
      default: "asdas"
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
    testF() {
      var vm = this;
      // eslint-disable-next-line no-unused-vars
      this.InputTitle.hr.forEach((value, index) => {
        console.log(vm.$refs[value][0].form.parentId);
      });
    }
  },
  computed: {
    ...mapState({
      InputTitle: "InputTitle"
    })
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
</style>

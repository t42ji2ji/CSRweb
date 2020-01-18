<template lang="pug">
  .question
    .adjust
      h3 {{fileName}}
      .quote(v-for="(question, index) in fileData.questions")
        Table(:hover="false", :data="item.data", :type="item.type", v-for="(item, index) in question.q", :key="index" :id="'table'+index", :class="{'tableOdd':index%2 != 1}")
      .btn(v-if="isUploadPage") send
</template>

<script>
import Table from "../../components/Table";
import questionField from "../../assets/questionData/hr";
import questionFieldnew from "../../assets/questionData/hrnew";

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
  mounted() {},
  data() {
    return {
      questionTitle: [
        ["Staff Head Count", "2", "bold"],
        ["Male", "1", "normal"],
        ["Female", "1", "normal"]
      ],
      test: "input",
      questionsnew: questionFieldnew.excelData,
      questions: questionField.data.questions,
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
  margin-top: 20px;
  border: 1px solid #42b983;
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

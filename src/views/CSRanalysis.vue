<template lang="pug">
  .CSRanalysis(v-if="isLogin")
    h2 CSR Data Analysis
    //- h3 {{fileTotal}}
    .flobatbtnGroup
      .floatbtn(@click="handleUpload") +
      .btnInfo Upload
    .QuestionWraper(v-if="Object.keys(fileData).length > 0", )
      .pdf(ref="qwrapper")
        .btn(@click="()=> {this.isChart = !this.isChart}" v-if="uploadVisible")
          font-awesome-icon(icon="chart-bar")
          span  Table / statistics graph

        HR(:fileData="fileData", :fileName="fileName",v-show="!isChart", isUploadPage=true,isAnalysisPage=true, :datepicker="true")
        //- .chartAdjust
        //-   bar-chart(:chart-data="fillChartData()", :options="options")
        
        Anaylsis(:fileTotal="fileTotal", :fileTotalText="fileTotalText",v-if="isChart", :fileName="fileFormName",)
        .btn(@click="toPdf" v-if="uploadVisible") DownLoad PDF

      //- .chartWrapper
      //-   .questionChart(v-for="(data, index) in fileTotal[0]",v-if="isChart")
      //-     Table(:hover="false", :data="fileTotal[3][index]", type="title")
      //-     .chartAdjust
      //-       bar-chart(:chart-data="fillChartData(data,index)", :options="options")
  GotoLogin(v-else="isLogin")  
</template>
<script>
import Excel from "../assets/assetsJs/excel";
import HR from "../components/questions/HR";
import Table from "../components/Table";
import Anaylsis from "../components/questions/Anaylsis";
import GotoLogin from "../components/GotoLogin.vue";

import ExtractExcel from "../assets/assetsJs/extract";
import BarChart from "../components/chart/BarChart";
import chroma from "chroma-js";
import questionPlugin from "../assets/questionData/question_plugin";

import { mapActions, mapState } from "vuex";
import toPdf from "../mixins/toPdf";

export default {
  components: {
    HR,
    BarChart,
    Table,
    Anaylsis,
    GotoLogin,
  },
  mixins: [toPdf],
  data() {
    return {
      isChart: false,
      data: [],
      fileData: {},
      fileName: "",
      fileTotal: [],
      d: "wwasds",
      datacollection: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              stacked: true,
            },
          ],
          xAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    ...mapState({
      isLogin: "isLogin",
      userData: "userData",
      uploadVisible: "uploadVisible",
    }),
    fileTotalText() {
      var output = this.fileData.questions.map((val) => {
        var x = val.q.map((val) => {
          if (val.type == "textview") {
            return val.data;
          }
          if (val.data[1] != undefined) {
            if (val.type == "normal" && isNaN(val.data[1][0])) {
              return val.data;
            }
          }
        });
        if (x != undefined) return x;
      });
      return output;
    },
    fileFormName() {
      var firstq = this.fileData.questions[0].q[0].data[0][0];
      switch (firstq) {
        case "Staff Head Count":
          return "Human Resources";
        case "Engergy consumption":
          return "Engineering & Maintenance";
        case "Satisfaction rate":
          return "Customer Services & Relationship";
        case "Donations":
          return "Community & Public Relations";
        default:
          return "";
      }
    },
  },
  methods: {
    ...mapActions({
      changeFormState: "changeFormState",
      changeUploadVisible: "changeUploadVisible",
    }),
    toPdf() {
      this.mixins_toPdf(this.$refs.qwrapper, this.fileName);
    },
    handleUpload() {
      // eslint-disable-next-line no-unused-vars
      Excel.importExcel((data, dataRef, filename) => {
        this.data = data;
        this.fileData = ExtractExcel.extractData(data);
        this.fileTotal = ExtractExcel.calcTotal(data);
        this.fileName = filename.name;
        var firstq = this.fileData.questions[0].q[0].data[0][0];
        var vm = this;
        switch (firstq) {
          case "Staff Head Count":
            this.fileData.fileConfig.name = "Human Resources";
            this.changeFormState(0);
            questionPlugin.hr_plugin.forEach((val) => {
              vm.fileData.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          case "Engergy consumption":
            this.fileData.fileConfig.name = "Engineering & Maintenance";

            this.changeFormState(1);

            questionPlugin.engmain_plugin.forEach((val) => {
              vm.fileData.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          case "Satisfaction rate":
            this.fileData.fileConfig.name = "Customer Services & Relationship";
            this.changeFormState(2);
            questionPlugin.cumser_plugin.forEach((val) => {
              vm.fileData.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          case "Donations":
            this.fileData.fileConfig.name = "Community & Public Relations";
            this.changeFormState(3);
            questionPlugin.pubrel_plugin.forEach((val) => {
              vm.fileData.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          default:
            break;
        }
      });
    },
    fillChartData(data, nowIndex) {
      var chromacolor = chroma
        .scale(["#8DDF5E", "#306377"])
        .mode("hcl")
        .colors(data.length);
      var dataset = data.map((value, index) => {
        return {
          label: value,
          backgroundColor: chromacolor[index],
          data: this.fileTotal[1][nowIndex][index],
        };
      });
      var chartData = {
        labels: ["Male", "Female"],
        datasets: dataset,
      };
      return chartData;
    },
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#343432",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style lang="scss">
.CSRanalysis {
  flex: 5;
  height: 100vh;
  box-sizing: border-box;
  padding: 30px;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
  }
  h4 {
    margin: 0;
    margin-bottom: 2rem;
  }
}
.QuestionWraper {
  padding: 50px 25px;
  background: white;
  position: relative;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  .pdf {
    width: 90%;
  }
}

.btn {
  border: 2px solid #42b983;
  cursor: pointer;
  padding: 2px 12px;
  margin: 10px;
  white-space: nowrap;
}

.chartWrapper {
  width: 800px;
}

.questionChart {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

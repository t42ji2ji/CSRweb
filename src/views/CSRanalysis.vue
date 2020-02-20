<template lang="pug">
  .CSRanalysis
    h2 CSR 資訊分析
    h4 CSR Information Analysis
    //- h3 {{fileTotal}}
    .flobatbtnGroup
      .floatbtn(@click="handleUpload") +
      .btnInfo 上傳檔案
    .QuestionWraper(v-if="Object.keys(fileData).length > 0")
      .btn(@click="()=> {this.isChart = !this.isChart}")
        font-awesome-icon(icon="chart-bar")
        span   切換表格/統計

      HR(:fileData="fileData", :fileName="fileName",v-show="!isChart")
      //- .chartAdjust
      //-   bar-chart(:chart-data="fillChartData()", :options="options")
      .chartWrapper
        .questionChart(v-for="(data, index) in fileTotal[0]",v-if="isChart")
          Table(:hover="false", :data="fileTotal[3][index]", type="title")
          .chartAdjust
            bar-chart(:chart-data="fillChartData(data,index)", :options="options")
    
</template>
<script>
import Excel from "../assets/assetsJs/excel";
import HR from "../components/questions/HR";
import Table from "../components/Table";

import ExtractExcel from "../assets/assetsJs/extract";
import BarChart from "../components/chart/BarChart";
import chroma from "chroma-js";

export default {
  components: {
    HR,
    BarChart,
    Table
  },
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
              stacked: true
            }
          ],
          xAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    questions() {
      var chromacolor = chroma
        .scale(["#8DDF5E", "#306377"])
        .mode("hcl")
        .colors(ExtractExcel.tt[0][0].length);
      var dataset = ExtractExcel.tt[0][0].map((value, index) => {
        return {
          label: value,
          backgroundColor: chromacolor[index],
          data: ExtractExcel.tt[1][0][index]
        };
      });
      var chartData = {
        labels: ["Male", "Female"],
        datasets: dataset
      };
      return chartData;
    }
  },
  methods: {
    handleUpload() {
      // eslint-disable-next-line no-unused-vars
      Excel.importExcel((data, dataRef, filename) => {
        this.data = data;
        this.fileData = ExtractExcel.extractData(data);
        console.log(this.fileData);
        this.fileTotal = ExtractExcel.calcTotal(data);
        this.fileName = filename.name;
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
          data: this.fileTotal[1][nowIndex][index]
        };
      });
      var chartData = {
        labels: ["Male", "Female"],
        datasets: dataset
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
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#343432",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
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
.chartAdjust {
  margin-top: 10px;
  width: 500px;
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
}
.flobatbtnGroup {
  z-index: 999;
  position: absolute;
  right: 7%;
  bottom: 7%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  .btnInfo {
    margin-top: 15px;
  }
  .floatbtn {
    text-align: center;
    line-height: 3rem;
    vertical-align: middle;

    background-color: #42b983;
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;

    box-shadow: #42b98360 2px 4px 10px;
    transition: 0.4s;
    &:hover {
      transform: scale(1.3);
      box-shadow: #42b98360 2px 7px 10px;
    }
  }
}

.btn {
  border: 2px solid #42b983;
  cursor: pointer;
  padding: 2px 12px;
  margin: 10px;
}

.chartWrapper {
  width: 700px;
}

.questionChart {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

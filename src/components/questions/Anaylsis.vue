<template lang="pug">
  .chartWrapper
    .questionChart(v-for="(data, index) in fileTotal[0]")
      Table(:hover="false", :data="fileTotal[3][index]", type="title")
      .chartAdjust
        bar-chart(:chart-data="fillChartData(data,index)", :options="getOptions(index)", v-if="!altChartType(index)" :width="600" :height="500")
      .textview(v-if="!altChartType(index)" v-for="(data, qIndex) in fileTotal[1][index]") {{fileTotal[0][index][qIndex]}}：{{data[0]}}
      .textview(v-if="altChartType(index)" v-for="(data, qIndex) in fileTotalText[index]") 
        .text(v-for="(data, x) in altTotalText(data)") {{data[0]}} 
          span(v-if="x % 2 == 0") :
          |
          hr(v-if="x % 2 == 1") 
          |
        //- .textview(v-if="altChartType(index)" v-for="(data, qIndex) in fileTotal[1][index]") {{fileTotal[0][index][qIndex]}}:{{data[0]}}
</template>

<script>
import Table from "../Table";
import BarChart from "../chart/BarChart";
import chroma from "chroma-js";
import questionPlugin from "../../assets/questionData/question_plugin";

export default {
  components: {
    BarChart,
    Table
  },
  props: {
    fileTotal: {
      required: true,
      type: Array
    },
    fileTotalText: {
      required: true,
      type: Array
    },
    fileName: {
      required: true,
      type: String
    },
    options: {
      default: () => {
        return {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  min: 0
                }
              }
            ],
            xAxes: [
              {
                stacked: true
              }
            ]
          }
        };
      }
    }
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      console.log(this.fileTotal);
      console.log(this.fileTotalText);
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
        labels: this.altlabels(nowIndex),
        datasets: dataset
      };
      return chartData;
    },
    altTotalText(data) {
      if (data !== undefined) return data;
    },
    altlabels(index) {
      switch (this.fileName) {
        case "Hr":
          return questionPlugin.hr_label(index);
        case "Cum Ser":
          return questionPlugin.cumser_label(index);
        case "ENG & MAIN":
          return questionPlugin.engmain_label(index);
        case "Pub Rel":
          return questionPlugin.pubrel_label(index);
        default:
          return questionPlugin.hr_label(index);
      }
    },
    altChartType(index) {
      switch (this.fileName) {
        case "Hr":
          return questionPlugin.hr_plugin.includes(index);
        case "Cum Ser":
          return questionPlugin.cumser_plugin.includes(index);
        case "ENG & MAIN":
          return questionPlugin.engmain_plugin.includes(index);
        case "Pub Rel":
          return questionPlugin.pubrel_plugin.includes(index);
        default:
          console.log("error label");
          return questionPlugin.hr_label.includes(index);
      }
    },
    getOptions(index) {
      if (this.altChartType(index)) {
        return {
          responsive: true,
          maintainAspectRatio: false,
          beginAtZero: true
        };
      }
      var option;
      if (this.fileTotal[1][index][0].length == 1) {
        option = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0
                }
              }
            ]
          }
        };
      } else {
        option = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  min: 0
                }
              }
            ],
            xAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  min: 0
                }
              }
            ]
          }
        };
      }

      return option;
    }
  }
};
</script>

<style lang="scss" scoped>
.chartAdjust {
  margin-top: 10px;
  display: flex;
}

.chartWrapper {
  width: 100%;
  margin-top: 20px;
}
.questionChart {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textview {
  text-align: left;
  width: 100%;
  font-weight: bold;
  flex: 1;
}
</style>
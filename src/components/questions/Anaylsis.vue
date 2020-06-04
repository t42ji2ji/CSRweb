<template lang="pug">
  .chartWrapper
    h3(v-if="showFileName") {{fileName}}
    .questionChart(v-for="(data, index) in fileTotal[0]" v-if="dataview.includes(index)")
      p.adjust(contenteditable="true" :class="{ noborder: !adjust}")
      Table(:hover="false", :data="fileTotal[3][index]", type="title") 
      Table(:hover="false", :data="[[fileTotal[0][index][qIndex]], ...data.map(e=>{return[e]})]", type="normal", v-for="(data, qIndex) in fileTotal[1][index]", v-if="!altChartType(index)", :key="qIndex")
      Table(:hover="false", :data="[[fileTotal[0][index][qIndex]], [fileTotalText[index][qIndex+1][1][0]]]", type="normal", v-for="(data, qIndex) in fileTotal[0][index]", v-if="altYNType(index)", :key="qIndex")
      //- h3(v-if="altYNType(index)"  v-for="(data, qIndex) in fileTotal[0][index]") {{fileTotalText[index][qIndex+1][1][0]}} 
      //- .textview(v-if="!altChartType(index)" v-for="(data, qIndex) in fileTotal[1][index]") {{fileTotal[0][index][qIndex]}}：{{data[0]}}
      .textview(v-if="altChartType(index) && !altYNType(index)" v-for="(data, qIndex) in fileTotalText[index]") 
        .text(v-for="(data, x) in altTotalText(data)") {{data[0]}} 
          span(v-if="x % 2 == 0") 
          |
          hr(v-if="x % 2 == 1") 
          |
      .chartAdjust
        bar-chart(:chart-data="fillChartData(data,index)", :options="getOptions(index)", v-if="!altChartType(index) && charthasData(index) && !altYNType(index)" :width="500" :height="300")

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
    Table,
  },
  props: {
    fileTotal: {
      required: true,
      type: Array,
    },
    adjust: {
      required: false,
      default: false,
      type: Boolean,
    },
    showFileName: {
      required: false,
      type: Boolean,
      default: () => {
        return false;
      },
    },
    dataview: {
      required: false,
      type: Array,
      default: () => {
        return [...Array(100).keys()];
      },
    },
    fileTotalText: {
      required: true,
      type: Array,
    },
    fileName: {
      required: true,
      type: String,
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
                  min: 0,
                },
              },
            ],
            xAxes: [
              {
                stacked: true,
              },
            ],
          },
        };
      },
    },
  },
  mounted() {
    console.log(this.fileTotal);
    console.log(this.fileTotalText);
  },
  methods: {
    test() {},
    charthasData(index) {
      if (this.fileTotal[1][index].length === 0) {
        console.log(this.fileTotal[1][index]);
        return false;
      } else {
        return true;
      }
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
        labels: this.altlabels(nowIndex),
        datasets: dataset,
      };
      return chartData;
    },
    altTotalText(data) {
      if (data !== undefined) return data;
    },
    altlabels(index) {
      switch (this.fileName) {
        case "Human Resources":
          return questionPlugin.hr_label(index);
        case "Engineering & Maintenance":
          return questionPlugin.engmain_label(index);
        case "Customer Services & Relationship":
          return questionPlugin.cumser_label(index);
        case "Community & Public Relations":
          return questionPlugin.pubrel_label(index);
        default:
          return questionPlugin.hr_label(index);
      }
    },
    altChartType(index) {
      switch (this.fileName) {
        case "Human Resources":
          return questionPlugin.hr_plugin.includes(index);
        case "Engineering & Maintenance":
          return questionPlugin.engmain_plugin.includes(index);
        case "Customer Services & Relationship":
          return questionPlugin.cumser_plugin.includes(index);
        case "Community & Public Relations":
          return questionPlugin.pubrel_plugin.includes(index);
        default:
          console.log(`error label ${this.fileName}`);
          return questionPlugin.hr_label.includes(index);
      }
    },
    altYNType(index) {
      switch (this.fileName) {
        case "Human Resources":
          return questionPlugin.hr_isYN_plugin.includes(index);
        case "Engineering & Maintenance":
          return questionPlugin.engmain_isYN_plugin.includes(index);
        case "Customer Services & Relationship":
          return questionPlugin.cumser_isYN_plugin.includes(index);
        case "Community & Public Relations":
          return questionPlugin.pubrel_isYN_plugin.includes(index);
        default:
          console.log(`error label ${this.fileName}`);
          return questionPlugin.hr_isYN_plugin.includes(index);
      }
    },
    getOptions(index) {
      if (this.altChartType(index)) {
        return {
          responsive: true,
          maintainAspectRatio: true,
          beginAtZero: true,
        };
      }
      var option;
      if (this.fileTotal[1][index].length === 0) {
        option = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                },
              },
            ],
          },
        };
      } else if (this.fileTotal[1][index][0].length == 1) {
        option = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                },
              },
            ],
          },
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
                  min: 0,
                },
              },
            ],
            xAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  min: 0,
                },
              },
            ],
          },
        };
      }

      return option;
    },
  },
};
</script>

<style lang="scss" scoped>
.chartAdjust {
  margin-top: 10px;
  display: flex;
}

.adjust {
  border: 1px solid rgb(200, 200, 200);
  width: 100%;
  line-height: 8px;
  box-sizing: border-box;
}

.noborder {
  border: none;
}

.text {
  margin: 15px 0px 15px 0px;
}

.chartWrapper {
  width: 100%;
  margin-top: 20px;
}
.questionChart {
  margin-bottom: 2rem;
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

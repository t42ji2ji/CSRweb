<template lang="pug">
#app
  transition(name="bounce")
    .cover(v-if="blackBg", @click="OpenTable")
  transition(name="bounce")
    .Questionnaire(@click="", v-if="blackBg")
      .btn(@click="test" )
        font-awesome-icon(icon="chart-bar")
        span  表格/統計圖
      HR(:fileData="FileData", isUploadPage=true, :fileName="FileData.fileConfig.name", v-show="!isChart" ref="analysis" :datepicker="true") 
      Analysis(:fileData="FileData",:fileName="FileData.fileConfig.name", :fileTotal='fileTotal' :fileTotalText="fileTotalText" v-if="isChart" ) 


  #nav
    .tab
      router-link(to='/') 
        font-awesome-icon(icon="tasks") 
        span   CSR Data Management
      router-link(to='/about')
        font-awesome-icon(icon="file-excel") 
        span   CSR Data Analysis
      router-link(to='/Report')
        font-awesome-icon(icon="file-excel") 
        span   Report
      router-link(to='/t')
        font-awesome-icon(icon="marker") 
        span   t
      router-link(to='/Management' v-if="this.userData.level > 0")
        font-awesome-icon(icon="marker") 
        span   表單管理
      router-link(to='/login')
        font-awesome-icon(icon="user") 
        span   Login
    .logo()
  router-view

</template>

<script>
import { mapActions, mapState } from "vuex";
import HR from "./components/questions/HR";
import HRdata from "./assets/questionData/hrnew";
import Analysis from "./components/questions/Anaylsis";
import ExtractExcel from "./assets/assetsJs/extract";

export default {
  components: {
    HR,
    Analysis
  },
  computed: {
    ...mapState({
      blackBg: "blackBg",
      userData: "userData"
    }),
    blackBg() {
      return this.$store.state.blackBg;
    },
    FileData() {
      return this.$store.state.FileData;
    },
    fileTotal() {
      return ExtractExcel.calcTotal(this.subData, true);
    },
    fileTotalText() {
      var output = this.subData.questions.map(val => {
        var x = val.q.map(val => {
          if (val.type == "textview") {
            return val.data;
          }
        });

        if (x != undefined) return x;
      });
      return output;
    }
  },
  mounted() {
    var vm = this;
    document.addEventListener("keyup", e => {
      if (e.code === "Escape" && vm.blackBg) {
        vm.openBlackBg();
      }
    });
  },
  data() {
    return {
      fileData: HRdata.excelData,
      subData: {},
      isChart: false
    };
  },
  methods: {
    ...mapActions({
      openBlackBg: "isShowBlackBg"
    }),
    OpenTable() {
      this.openBlackBg();
      this.isChart = false;
    },
    test() {
      console.log("object");
      console.log(this.$refs);
      if (this.$refs.analysis)
        this.subData = this.$refs.analysis.getSubmitData();
      this.$nextTick(() => {
        this.isChart = !this.isChart;
        if (!this.isChart) {
          this.subData = {};
        }
      });

      // this.subData = data;
      // this.isChart = true;
    }
  }
};
</script>

<style lang="scss">
$green: #42b983;

@media screen and (max-width: 420px) {
  #nav {
    margin-left: -180px;
  }
}

@mixin flex() {
  display: flex;
  flex-direction: column;
}

.flobatbtnGroup {
  z-index: 999;
  position: fixed;
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

.bounce-enter-active {
  animation: fade-in 0.5s;
}
.bounce-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
  }
  100% {
    opacity: 1;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eff2f8;
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.btn {
  min-width: 70px;
  max-width: 200px;
  border: 1px solid #42b983;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 5px 20px;
  color: #42b983;
  cursor: pointer;
  align-self: center;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  &:hover {
    color: white;
    background-color: #42b983;
  }
}

.btn_disable {
  filter: grayscale(0.8);
  pointer-events: none;
}

.cover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  z-index: 999;
}

.Questionnaire {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 85%;
  background-color: white;
  z-index: 1000;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0px 2rem;
  overflow-y: scroll;
  box-sizing: border-box;
}

#nav {
  width: 18%;
  min-width: 180px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  overflow: hidden;
  box-sizing: border-box;
  transition: 0.4s;
  .tab {
    width: 100%;
    padding: 10px;
    a {
      padding: 10px 30px;
      border-radius: 20px 0px 0px 20px;
      text-align: left;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      transition: 0.2s;
      margin-bottom: 10px;
      &.router-link-exact-active {
        pointer-events: none;
        color: white;
        background-color: $green;
      }
      &:hover {
        color: #7394b8;
      }
    }
  }

  .tab {
    @include flex;
    margin-top: 8rem;
  }
  .logo {
    margin: 15px 40px;
    width: 100%;
    height: 30px;
    justify-self: flex-end;
    background-position: 0 center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png");
  }
}

.redinput {
  border: 1px solid rgba(255, 0, 0, 0.431);
}

.pdf {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
}
</style>

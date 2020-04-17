<template lang="pug">
  .Management(v-if="isLogin")
    Alert(:msg="alert.msg",:isShow="alert.isShow",@alertReturnVale="handleDelCheck")
    h2 表單管理
    h4 Management
    .tabgroup
      .tab.tabClick(@click ="changeTab('hr', $event)") Hr
      .tab(@click ="changeTab('ENG&MAIN', $event)") ENG&MAIN
      .tab(@click ="changeTab('CumSer', $event)") CumSer
      .tab(@click ="changeTab('PubRel', $event)") PubRel
    //- .tablegroup
    //-   Table(v-for="(item,index) in csrData", :key="index", :data="item", @click.native="openTable(index)")
    .tablegroup
      Table(:data=[
        ["id", "1", "bold"],
        ["type", "2", "bold"],
        ["userName", "3", "bold"],
        ["last update", "3", "bold"]
      ], :hover="false")
      Table(v-for="(item,index) in nowData", :key="index", :data="item" :deletBtn="true", v-on:delete="getFormId(index)", v-on:openTable="OpenFormTable(index)")
      .formpage
        .btnGroup
          .btn(@click="pageChange(false)" :class="{btn_disable: isBtnDisable.lastPage}") 上一頁 
          span(style="padding: 0px 10px")  {{nowpage}} 
          .btn(@click="pageChange(true)" :class="{btn_disable: isBtnDisable.nextPage}") 下一頁 
    transition(name="bounce")
      .QuestionWindow(v-if="openWindow")
        .cover(@click="()=>{this.openWindow = !this.openWindow}")
        .QuestionWraper(v-if="this.fileData.hasOwnProperty('questions') ?  true : false " )
          .pdf(ref="qwrapper")
            .btn(@click="()=> {this.isChart = !this.isChart}" v-if="uploadVisible")
                font-awesome-icon(icon="chart-bar")
                span  表格/統計圖
            HR(:fileData="fileData", :fileName="fileName",v-show="!isChart")
            Anaylsis(:fileTotal="fileTotal", :fileTotalText="fileTotalText",v-if="isChart", :fileName="fileName")
            .btn(@click="toPdf" v-if="uploadVisible") DownLoad PDF
        .noData(v-else="this.fileData.hasOwnProperty('questions') ?  true : false ")
          h3 沒有資料
        


  GotoLogin(v-else="isLogin")
</template>

<script>
import { mapState, mapActions } from "vuex";
import GotoLogin from "../components/GotoLogin";
import Table from "../components/Table";
import axios from "axios";
import dayjs from "dayjs";
import HR from "../components/questions/HR";
import ExtractExcel from "../assets/assetsJs/extract";
import Anaylsis from "../components/questions/Anaylsis";
import Alert from "../components/Alert";

import toPdf from "../mixins/toPdf";

export default {
  components: {
    GotoLogin,
    Table,
    HR,
    Anaylsis,
    Alert
  },
  mixins: [toPdf],
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.userData.level > 0 && vm.isLogin) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${vm.userData.token}`;
        vm.geFilledFormData("hr");
      }
    });
  },
  mounted() {},
  data() {
    return {
      isBtnDisable: { lastPage: true, nextPage: false },
      nowpage: 1,
      alert: {
        msg: "",
        isShow: false,
        _id: ""
      },
      isChart: false,
      openWindow: false,
      fileData: {},
      responseData: null,
      fileName: "",
      hrData: [],
      cumserData: [],
      engmainData: [],
      puberlData: [],
      nowData: [],
      nowTab: "hr",
      csrData: [
        [
          ["HR", "1", "bold"],
          ["必填表單", "2", "normal"],
          ["2019/01/01", "1", "normal"]
        ],
        [
          ["ENG & MAIN", "1", "bold"],
          ["必填表單", "2", "normal"],
          ["2019/01/01", "1", "normal"]
        ],
        [
          ["Cum Ser", "1", "bold"],
          ["必填表單", "2", "normal"],
          ["2019/01/01", "1", "normal"]
        ],
        [
          ["Pub Rel", "1", "bold"],
          ["必填表單", "2", "normal"],
          ["2019/01/01", "1", "normal"]
        ]
      ]
    };
  },
  computed: {
    ...mapState({
      isLogin: "isLogin",
      userData: "userData",
      uploadVisible: "uploadVisible"
    }),
    fileTotal() {
      return ExtractExcel.calcTotal(this.fileData, true);
    },
    fileTotalText() {
      var output = this.fileData.questions.map(val => {
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

  methods: {
    ...mapActions({
      openBlackBg: "isShowBlackBg",
      ChangeFileData: "ChangeFileData",
      changeUploadVisible: "changeUploadVisible"
    }),
    toPdf() {
      this.mixins_toPdf(this.$refs.qwrapper, this.fileName);
    },
    pageChange(isNext) {
      if (isNext) {
        this.nowpage += 1;
        this.geFilledFormData(this.nowTab, this.nowpage);
      } else {
        if (this.nowpage == 1) {
          return;
        }
        this.nowpage -= 1;
        this.geFilledFormData(this.nowTab, this.nowpage);
      }
    },
    handleDelCheck(val) {
      if (val) {
        this.deleteForm(this.alert._id);
        this.alert.isShow = false;
      } else {
        this.alert.isShow = false;
      }
    },
    getFormId(index) {
      var id = this.responseData[index]._id;
      this.alert.isShow = true;
      this.alert.msg = `確定刪除嗎?`;
      this.alert._id = id;
    },
    OpenFormTable(index) {
      // this.openBlackBg();
      console.log(this.responseData[index].data);
      this.fileData = this.responseData[index].data;
      this.openWindow = true;
    },
    altToNowData(payload) {
      this.nowData = payload.map((value, index) => {
        return [
          [index, "1", "normal"],
          [value.data.fileConfig.name, "2", "normal"],
          [value.user.realname, "3", "normal"],
          [dayjs(value.created_at).format("YYYY/MM/DD HH:mm"), "3", "normal"]
        ];
      });
    },
    changeTab(tabname, event) {
      this.nowTab = tabname;
      //page clean
      this.nowpage = 1;
      this.btnClear(false);

      this.geFilledFormData(tabname);
      var tab = document.querySelectorAll(".tab");
      tab.forEach(value => {
        value.classList.remove("tabClick");
      });
      event.target.classList.add("tabClick");
    },
    btnClear(state) {
      this.isBtnDisable.nextPage = state;
      this.isBtnDisable.lastPage = state;
      if (this.nowpage == 1) {
        this.isBtnDisable.lastPage = true;
      }
      this.isBtnDisable.reg = state;
    },
    async deleteForm(delet_id) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.delete(
          `https://csrweb.ahkui.com/api/form/${this.nowTab}/${delet_id}`
        );
        if (response.data.status) {
          this.geFilledFormData(this.nowTab);
        } else {
          this.isDelError = true;
          this.notLoggin(response.data.message);
        }
      } catch (error) {
        console.error(error);
        this.isDelError = true;
        this.notLoggin("找不到帳號 " + this.del_username);
      }
    },
    async geFilledFormData(formname, page = 1) {
      this.btnClear(false);
      this.nowData = [];
      this.isDelError = false;

      var limit = 15;
      try {
        const response = await axios.get(
          `https://csrweb.ahkui.com/api/form/${formname}/list?limit=${limit}&page=${page}`
        );
        if (response.data.status) {
          this.responseData = response.data.data;
          if (this.responseData.length < limit) {
            this.isBtnDisable.nextPage = true;
          }
          switch (formname) {
            case "hr":
              this.fileName = "Human Resources";
              this.hrData = response.data.data;
              this.altToNowData(this.hrData);
              break;
            case "ENG&MAIN":
              this.fileName = "Engineering & Maintenance";
              this.engmainData = response.data.data;
              this.altToNowData(this.engmainData);
              break;
            case "CumSer":
              this.fileName = "Customer Services & Relationship";
              this.cumserData = response.data.data;
              this.altToNowData(this.cumserData);
              break;
            case "PubRel":
              this.fileName = "Community & Public Relations";
              this.puberlData = response.data.data;
              this.altToNowData(this.puberlData);
              break;
          }
        } else {
          console.log("no ok");
        }
      } catch (error) {
        console.error(error);
      }
    },
    openTable(index) {
      this.openBlackBg();
      this.ChangeFileData(this.mapData(this.csrData[index][0][0]));
    },
    mapData(str) {
      var data = null;
      switch (str) {
        case "HR":
          data = require("../assets/questionData/hr");
          break;
        case "ENG & MAIN":
          data = require("../assets/questionData/eng&main");
          break;
        case "Cum Ser":
          data = require("../assets/questionData/cumser");
          break;
        case "Pub Rel":
          data = require("../assets/questionData/pubrel");
          break;
        default:
          break;
      }
      return data.excelData;
    }
  }
};
</script>

<style lang="scss" scoped>
.Management {
  flex: 5;
  height: 100%;
  padding: 30px;
  text-align: left;
  position: relative;
  overflow-y: scroll;
  h2 {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
}

.tablegroup {
  width: 100%;
  position: relative;
  background-color: white;
}

.tabgroup {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  .tab {
    min-width: 50px;
    text-align: center;
    padding: 5px 20px;
    background-color: white;
    border-radius: 2px;
    margin-top: 5px;
    cursor: pointer;
    &:hover {
      background-color: #42b983;
      color: white;
    }
  }
  .tabClick {
    background-color: #42b983;
    color: white;
    font-weight: bold;
  }
}

.QuestionWraper {
  padding: 50px 25px;
  background: white;
  position: relative;
  height: 80%;
  width: 80%;
  overflow-y: scroll;
}
.QuestionWindow {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  .cover {
    background-color: rgba(0, 0, 0, 0.541);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>

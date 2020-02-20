<template lang="pug">
  .Management(v-if="isLogin")
    h2 表單管理
    h4 Management
    .tabgroup
      .tab(@click ="changeTab('hr', $event)") Hr
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
      Table(v-for="(item,index) in nowData", :key="index", :data="item" @click.native="OpenTable(index)")
    .QuestionWraper
      HR(:fileData="fileData", fileName="fileName",v-show="true")

  GotoLogin(v-else="isLogin")
</template>

<script>
import { mapState, mapActions } from "vuex";
import GotoLogin from "../components/GotoLogin";
import Table from "../components/Table";
import axios from "axios";
import dayjs from "dayjs";
import HR from "../components/questions/HR";

export default {
  components: {
    GotoLogin,
    Table,
    HR
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.userData.level > 0 && vm.isLogin) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${vm.userData.token}`;
        vm.geFilledFormData();
      }
    });
  },
  data() {
    return {
      fileData: null,
      responseData: null,
      fileName: "",
      hrData: [],
      cumserData: [],
      engmainData: [],
      puberlData: [],
      nowData: [],
      nowTab: {
        hr: false,
        "ENG&MAIN": false,
        CumSer: false,
        PubRel: false
      },
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
      userData: "userData"
    })
  },
  methods: {
    ...mapActions({
      openBlackBg: "isShowBlackBg",
      ChangeFileData: "ChangeFileData"
    }),
    OpenTable(index) {
      // this.openBlackBg();
      this.fileData = this.responseData[index].data;

      // console.log(index);
      // this.changeFormState(index);
      // // console.log(this.csrData[index][0][0]);
      // this.ChangeFileData(this.fileData);
    },
    altToNowData(payload) {
      this.nowData = [];
      this.nowData = payload.map((value, index) => {
        return [
          [index, "1", "normal"],
          [value.type, "2", "normal"],
          [value.user.realname, "3", "normal"],
          [dayjs(value.update_at).format("YYYY/MM/DD HH:mm"), "3", "normal"]
        ];
      });
    },
    changeTab(tabname, event) {
      this.geFilledFormData(tabname);
      var tab = document.querySelectorAll(".tab");
      tab.forEach(value => {
        value.classList.remove("tabClick");
      });
      event.target.classList.add("tabClick");
    },
    async geFilledFormData(formname) {
      this.isDelError = false;
      try {
        const response = await axios.get(
          `https://csrweb.ahkui.com/api/form/${formname}/list`
        );
        if (response.data.status) {
          this.responseData = response.data.data;
          switch (formname) {
            case "hr":
              console.log(response.data);
              this.fileName = "Hr";
              this.hrData = response.data.data;
              this.altToNowData(this.hrData);
              break;
            case "ENG&MAIN":
              this.fileName = "ENG & MAIN";
              this.engmainData = response.data.data;
              this.altToNowData(this.engmainData);
              break;
            case "CumSer":
              this.fileName = "Cum Ser";
              this.cumserData = response.data.data;
              this.altToNowData(this.cumserData);
              break;
            case "PubRel":
              this.fileName = "PubRel";
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
      console.log(index);
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
  height: 100vh;
  padding: 30px;
  text-align: left;
  position: relative;

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
  height: 60%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

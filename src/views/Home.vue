<template lang="pug">
  .home(v-if="isLogin")
    h2 CSR DATA Management
    .tablegroup()
      Table(:data="csrTitle", :hover="isTitle" )
      Table(v-for="(item,index) in csrData", :id="index",:data="item", :key="index", @click.native="OpenTable(index)", v-if="mapFormAuth[index]")
  GotoLogin(v-else="isLogin")

</template>

<script>
import Table from '../components/Table.vue';
import GotoLogin from '../components/GotoLogin.vue';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import axios from 'axios';
import lodash from 'lodash';

export default {
  name: 'home',
  components: {
    Table,
    GotoLogin,
  },
  mounted() {},
  data() {
    return {
      isTitle: false,
      csrTitle: [
        ['Department', '1', 'bold'],
        ['Data Input & Approval', '1', 'normal'],
        ['Last Update', '1', 'normal'],
      ],
      csrData: [
        [
          ['Human Resources', '1', 'bold'],
          ['MoMo Chan approved', '1', 'normal'],
          ['2019/04/01', '1', 'normal'],
        ],
        [
          ['Engineering & Maintenance', '1', 'bold'],
          ['Albert Leung input', '1', 'normal'],
          ['2019/04/01', '1', 'normal'],
        ],
        [
          ['Customer Services & Relationship', '1', 'bold'],
          ['Jose Ng input', '1', 'normal'],
          ['2019/04/01', '1', 'normal'],
        ],
        [
          ['Community & Public Relations', '1', 'bold'],
          ['Apple Wong approved', '1', 'normal'],
          ['2019/04/01', '1', 'normal'],
        ],
      ],
    };
  },
  computed: {
    ...mapState({
      isLogin: 'isLogin',
      userData: 'userData',
    }),
    mapFormAuth() {
      if (this.userData.level > 0) {
        return [true, true, true, true];
      }
      const compareTable = ['hr', 'ENG&MAIN', 'CumSer', 'PubRel'];
      var output = compareTable.map((val) => {
        if (this.userData.formVisible.includes(val)) {
          return true;
        } else {
          return false;
        }
      });
      return output;
    },
  },
  methods: {
    ...mapActions({
      openBlackBg: 'isShowBlackBg',
      ChangeFileData: 'ChangeFileData',
      changeFormState: 'changeFormState',
    }),
    async testUpload() {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          `https://csrweb.ahkui.com/api/form/hr`,
          {
            data: {
              test: '123hr',
            },
          }
        );
        console.log(response);
        // if (response.data.status) {
        //   this.changeLoginState();
        //   this.editUserdata(response.data);
        //   this.clearState();
        // } else {
        //   this.notLoggin("登出失敗");
        // }
      } catch (error) {
        console.error(error);
      }
    },
    OpenTable(index) {
      this.openBlackBg();
      this.changeFormState(index);
      // console.log(this.csrData[index][0][0]);
      var formName = this.csrData[index][0][0];
      this.ChangeFileData(this.mapData(formName));
    },
    mapData(str) {
      var data = {};
      switch (str) {
        case 'Human Resources':
          // data = require("../assets/questionData/hr");
          data = lodash.cloneDeep(require('../assets/questionData/hr'));
          break;
        case 'Engineering & Maintenance':
          data = lodash.cloneDeep(require('../assets/questionData/eng&main'));
          break;
        case 'Customer Services & Relationship':
          data = lodash.cloneDeep(require('../assets/questionData/cumser'));
          break;
        case 'Community & Public Relations':
          data = lodash.cloneDeep(require('../assets/questionData/pubrel'));
          break;
        default:
          break;
      }
      return data.excelData;
    },
  },
};
</script>

<style lang="scss" scoped>
.loginDirect {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.home {
  flex: 5;
  height: 100%;
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
  margin-top: 5%;
  width: 100%;
  position: relative;
  background-color: white;
}
</style>

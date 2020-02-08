<template lang="pug">
  .home(v-if="isLogin")
    h2 CSR 資訊管理
    h4 CSR Information Management
    .tablegroup()
      Table(:data="csrTitle", :hover="isTitle" )
      Table(v-for="(item,index) in csrData", :data="item", :key="index", @click.native="OpenTable(index)")
  GotoLogin(v-else="isLogin")

</template>

<script>
import Table from '../components/Table.vue';
import GotoLogin from '../components/GotoLogin.vue';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    Table,
    GotoLogin
  },
  mounted() {
    console.log('mounted');
    console.log(this.isLogin);
  },
  data() {
    return {
      isTitle: false,
      csrTitle: [
        ['表單標題', '1', 'bold'],
        ['表單描述', '2', 'normal'],
        ['建立日期', '1', 'normal']
      ],
      csrData: [
        [
          ['HR', '1', 'bold'],
          ['必填表單', '2', 'normal'],
          ['2019/01/01', '1', 'normal']
        ],
        [
          ['ENG & MAIN', '1', 'bold'],
          ['必填表單', '2', 'normal'],
          ['2019/01/01', '1', 'normal']
        ],
        [
          ['Cum Ser', '1', 'bold'],
          ['必填表單', '2', 'normal'],
          ['2019/01/01', '1', 'normal']
        ],
        [
          ['Pub Rel', '1', 'bold'],
          ['必填表單', '2', 'normal'],
          ['2019/01/01', '1', 'normal']
        ]
      ]
    };
  },
  computed: {
    ...mapState({
      isLogin: 'isLogin'
    })
  },
  methods: {
    ...mapActions({
      openBlackBg: 'isShowBlackBg',
      ChangeFileData: 'ChangeFileData'
    }),
    OpenTable(index) {
      this.openBlackBg();
      // console.log(this.csrData[index][0][0]);
      this.ChangeFileData(this.mapData(this.csrData[index][0][0]));
    },
    mapData(str) {
      var data = null;
      switch (str) {
        case 'HR':
          data = require('../assets/questionData/hr');
          break;
        case 'ENG & MAIN':
          data = require('../assets/questionData/eng&main');
          break;
        case 'Cum Ser':
          data = require('../assets/questionData/cumser');
          break;
        case 'Pub Rel':
          data = require('../assets/questionData/pubrel');
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

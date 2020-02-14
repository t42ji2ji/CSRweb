<template lang="pug">
  .Management(v-if="isLogin")
    h2 表單管理
    h4 Management
    .tablegroup
      Table(v-for="(item,index) in csrData", :key="index", :data="item", @click.native="openTable(index)")
  GotoLogin(v-else="isLogin")
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GotoLogin from '../components/GotoLogin';
import Table from '../components/Table';

export default {
  components: {
    GotoLogin,
    Table
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
    openTable(index) {
      this.openBlackBg();
      this.ChangeFileData(this.mapData(this.csrData[index][0][0]));
      console.log(index);
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
  },
  data() {
    return {
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

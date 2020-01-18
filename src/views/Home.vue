<template lang="pug">
  .home
    h2 CSR 資訊管理
    h4 CSR Information Management
    .tablegroup
      Table(:data="csrTitle", :hover="isTitle" )
      Table(v-for="(item,index) in csrData", :data="item", :key="index", @click.native="OpenTable")
</template>

<script>
import Table from '../components/Table.vue';
import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    Table
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
          ['HR', '1', 'normal'],
          ['必填表單', '2', 'normal'],
          ['2019/01/01', '1', 'normal']
        ],
        [
          ['HR', '1', 'normal'],
          ['必填表單', '2', 'normal'],
          ['2019/01/01', '1', 'normal']
        ]
      ]
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      openBlackBg: 'isShowBlackBg',
      ChangeFileData: 'ChangeFileData'
    }),
    OpenTable() {
      this.openBlackBg();
      this.ChangeFileData(this.mapData('HR'));
    },
    mapData(str) {
      var data = null;
      switch (str) {
        case 'HR':
          data = require('../assets/questionData/hrnew');
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

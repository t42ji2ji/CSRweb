<template lang="pug">
#app
  transition(name="bounce")
    .cover(v-if="blackBg", @click="OpenTable")
  transition(name="bounce")
    .Questionnaire(@click="", v-show="blackBg")
      HR(:fileData="FileData", isUploadPage=true, :fileName="FileData.fileConfig.name") 

  #nav
    .tab
      router-link(to='/') 
        font-awesome-icon(icon="tasks") 
        span  CSR資訊管理
      router-link(to='/about')
        font-awesome-icon(icon="file-excel") 
        span  CSR資訊分析
      router-link(to='/Management')
        font-awesome-icon(icon="user") 
        span  表單管理
      router-link(to='/login')
        font-awesome-icon(icon="user") 
        span  登入
    .logo()
  router-view

</template>

<script>
import { mapActions } from 'vuex';
import HR from './components/questions/HR';
import HRdata from './assets/questionData/hrnew';

export default {
  components: {
    HR
  },
  computed: {
    blackBg() {
      return this.$store.state.blackBg;
    },
    FileData() {
      return this.$store.state.FileData;
    }
  },
  data() {
    return {
      fileData: HRdata.excelData
    };
  },
  methods: {
    ...mapActions({
      openBlackBg: 'isShowBlackBg'
    }),
    OpenTable() {
      this.openBlackBg();
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    background-image: url('https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png');
  }
}
</style>

<template lang="pug">
  .Management(v-if="isLogin")
    h2 表單管理
    h4 Management
  GotoLogin(v-else="isLogin")
  
</template>

<script>
import { mapState } from 'vuex';
import GotoLogin from '../components/GotoLogin';

export default {
  components: {
    GotoLogin
  },
  computed: {
    ...mapState({
      isLogin: 'isLogin'
    })
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
</style>

<template lang="pug">
  .Login(v-if="!isLogin")
    .Cover
      img(src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png", alt="")
    .testfiled 帳號：
      input(v-model="username")
    .testfiled 密碼：
      input(v-model="password")
    .alertText(v-show="true") {{LoggMessage}}
    .btn(@click="Loggin") 登入
  .Login(v-else="isLogin")
    h1 {{userData.username}} 已經登入系統
    .btn(@click="Logout") 登出
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      username: 'ahkui',
      password: 'ahkui',
      isLogError: false,
      LoggMessage: ''
    };
  },
  computed: {
    ...mapState({
      isLogin: 'isLogin',
      userData: 'userData'
    })
  },
  methods: {
    ...mapActions({
      editUserdata: 'editUserdata',
      chnageLoginState: 'chnageLoginState'
    }),
    notLoggin(msg) {
      this.LoggMessage = msg;
    },
    async Logout() {
      axios.defaults.headers.common[
        'Auth-Token'
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          'https://csrweb.ahkui.com/api/user/logout'
        );
        console.log(response);
        if (response.data.status) {
          this.chnageLoginState();
          this.editUserdata(response.data);
        } else {
          this.notLoggin('登出失敗');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async Loggin() {
      try {
        const response = await axios.post(
          'https://csrweb.ahkui.com/api/user/login',
          {
            username: this.username,
            password: this.password
          }
        );
        console.log(response.data.status);
        if (response.data.status) {
          this.isLogError = false;
          this.chnageLoginState();
          this.editUserdata(response.data);
        } else {
          this.isLogError = true;
          this.notLoggin('Account or password not correct');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss">
.Login {
  flex: 5;
  height: 100%;
  padding: 30px;
  text-align: left;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .Cover {
    margin-top: -80px;
    width: 400px;
    height: 200px;
    img {
      width: 100%;
    }
  }

  h2 {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
}

.testfiled {
  margin-bottom: 10px;
  border-radius: 5px;
  font-weight: bold;
  input {
    border-radius: 5px;

    outline: none;
    border: none;
    padding: 5px;
    font-size: 1.3rem;
    background-color: #fff;
  }
}

.btn {
  border: 1px solid #42b983;
  margin-top: 40px;
  width: 100px;
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
.alertText {
  color: red;
}
</style>

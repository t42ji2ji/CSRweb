<template lang="pug">
  .Login(v-if="!isLogin")
    .Cover
      img(src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png", alt="")
    .testfiled 帳號：
      input(v-model="username")
    .testfiled 密碼：
      input(v-model="password", type="password")
    .alertText(v-show="isLogError") {{LoggMessage}}
    .btn(@click="Loggin") 登入
  .Login.alignLeft(v-else="isLogin")
    h2 {{userData.username}} 已經登入系統
    h4 管理員等級 {{userData.level}}
    Alert(@alertReturnVale="handleAlert",:msg="alertMsg", :isShow="alertShow", :showcancel="showcancel")
    .funcArea
      h2 註冊帳號
      .testfiled 
        span 會員姓名：
        input(v-model="reg_realname" )
      .testfiled 
        span 帳號：
        input(v-model="reg_username")
      .testfiled 
        span 密碼：
        input(v-model="reg_password" type="password")
      .testfiled 
        span 密碼確認：
        input(v-model="reg_password_confirm" type="password")
      .testfiled 
        span 帳號權限：
        select(v-model="reg_premision")
          option(disabled value="") 選擇權限
          option(value="0") 一般會員
          option(value="1") 管理員
      .testfiled 表單權限：
        input(type="checkbox" v-model="formVisible" value="hr" id="hr_checkbox")
        label(for="hr_checkbox") hr

        input(type="checkbox" v-model="formVisible" value="ENG&MAIN" id="ENG&MAIN_checkbox")
        label(for="ENG&MAIN_checkbox") ENG & MAIN

        input(type="checkbox" v-model="formVisible" value="CumSer" id="CumSer_checkbox")
        label(for="CumSer_checkbox") Cum Ser

        input(type="checkbox" v-model="formVisible" value="PubRel" id="PubRel_checkbox")
        label(for="PubRel_checkbox") Pub Rel

      .alertText(v-show="isRegError") {{LoggMessage}}
      .btn(@click="alertSet('register')") 註冊 
    .funcArea
      h2 刪除帳號
      .testfiled 刪除帳號名稱：
        input(v-model="del_username")
      .alertText(v-show="isDelError") {{LoggMessage}}
      .btn(@click="alertSet('delete')") 刪除
    .btn.alignLeft(@click="Logout") 登出

    
</template>

<script>
import axios from "axios";
import Alert from "../components/Alert";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  components: {
    Alert
  },
  data() {
    return {
      username: "",
      password: "",
      isLogError: false,
      isRegError: false,
      isDelError: false,
      LoggMessage: "",
      reg_username: "",
      reg_password: "",
      reg_premision: "",
      reg_password_confirm: "",
      reg_realname: "",
      del_username: "",
      alertMsg: "",
      alertShow: false,
      alertState: "",
      showcancel: true,
      formVisible: []
    };
  },
  computed: {
    ...mapState({
      isLogin: "isLogin",
      userData: "userData"
    }),
    alertLevel() {
      switch (this.userData.level) {
        case "0":
          return "一般會員";
        case "1":
          return "管理員";
        case "2":
          return "超級管理員";
      }
      return "";
    },
    alertAlt() {
      var validate;
      var validateMsg = "";

      switch (this.alertState) {
        case "register":
          if (
            this.reg_username == "" ||
            this.reg_password == "" ||
            this.reg_premision == "" ||
            this.reg_realname == ""
          ) {
            validate = false;
            validateMsg = "不可留空";
          }
          return {
            msg: `確定要註冊 ${this.reg_username} 嗎`,
            validate: validate,
            validateMsg: validateMsg
          };
        case "delete":
          if (
            this.reg_username == "" ||
            this.reg_password == "" ||
            this.reg_premision == ""
          ) {
            validate = false;
            validateMsg = "不可留空";
          }
          return {
            msg: `確定要刪除 ${this.del_username} 嗎`,
            validate: validate
          };
        default:
          return "";
      }
    }
  },
  methods: {
    ...mapActions({
      editUserdata: "editUserdata",
      chnageLoginState: "chnageLoginState"
    }),
    handleAlert(payload) {
      this.alertShow = false;
      if (payload) {
        switch (this.alertState) {
          case "register":
            this.registerAccount();
            break;
          case "delete":
            this.deleteAccount();
            break;
          default:
            this.alertShow = false;
            break;
        }
      } else {
        return;
      }
    },
    notLoggin(msg) {
      this.LoggMessage = msg;
    },
    alertSet(state) {
      this.clearState();
      this.alertShow = true;
      this.alertState = state;
      this.alertMsg = this.alertAlt.msg;
    },
    async registerAccount() {
      this.isRegError = false;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          "https://csrweb.ahkui.com/api/admin/user/new",
          {
            username: this.reg_username,
            password: this.reg_password,
            "password-confirm": this.reg_password_confirm,
            realname: this.reg_realname,
            level: this.reg_premision,
            formVisible: this.formVisible
          }
        );
        console.log(response);
        if (response.data.status) {
          this.isRegError = true;
          this.notLoggin("註冊成功");
          this.clearInput();
        } else {
          this.isRegError = true;
          this.notLoggin(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteAccount() {
      this.isDelError = false;

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.delete(
          `https://csrweb.ahkui.com/api/admin/user/${this.del_username}`
        );
        console.log(response);
        if (response.data.status) {
          this.isDelError = true;
          this.notLoggin("成功刪除 " + this.del_username);
          this.clearInput();
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
    async Logout() {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          "https://csrweb.ahkui.com/api/user/logout"
        );
        if (response.data.status) {
          this.chnageLoginState();
          this.editUserdata(response.data);
          this.clearState();
        } else {
          this.notLoggin("登出失敗");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async Loggin() {
      try {
        const response = await axios.post(
          "https://csrweb.ahkui.com/api/user/login",
          {
            username: this.username,
            password: this.password
          }
        );
        console.log(response.data);
        if (response.data.status) {
          this.isLogError = false;
          this.chnageLoginState();
          this.editUserdata(response.data);
        } else {
          this.isLogError = true;
          this.notLoggin("Account or password not correct");
        }
      } catch (error) {
        console.error(error);
      }
    },
    clearState() {
      this.isRegError = false;
      this.isDelError = false;
      this.isLogError = false;
    },
    clearInput() {
      this.reg_username = "";
      this.reg_password = "";
      this.reg_premision = "";
      this.reg_password_confirm = "";
      this.reg_realname = "";
      this.del_username = "";
      this.alertMsg = "";
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
    margin-bottom: 1.5rem;
  }
}

.alignLeft {
  align-items: start;
  justify-content: start;
  align-self: start;
}

.funcArea {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  h2 {
    margin-bottom: 10px;
  }
}
.testfiled {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  span {
    flex: 1;
  }
  select {
    flex: 2;
  }
  input {
    flex: 2;

    border-radius: 5px;

    outline: none;
    border: none;
    padding: 5px;
    font-size: 1.3rem;
    background-color: rgb(252, 252, 252);
    border: 1px solid #42b98358;
    &:focus {
      border: 1px solid #42b983;
    }
  }
}

.alertText {
  color: red;
}
</style>

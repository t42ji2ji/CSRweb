<template lang="pug">
  .Login(v-if="!isLogin")
    .Cover
      img(src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png", alt="")
    form(v-on:submit.prevent="Loggin")
      .testfiled Account：
        input(v-model="username")
      .testfiled Password：
        input(v-model="password", type="password")
      .alertText(v-show="isLogError") {{LoggMessage}}
      .btn(@click="Loggin") Login
      button(style="display: none")
  .Login.alignLeft(v-else-if="(isLogin && userData.level > 0)")
    h2 {{userData.realname}} 
    h4 Role: {{altLevel(userData.level)}}
    .btn.alignLeft.logout_btn(@click="Logout") Logout
    Alert(@alertReturnVale="handleAlert",:msg="alertMsg", :isShow="alertShow", :showcancel="showcancel")
    transition(name="bounce")
      .updateFormVisible(v-if="showVisible")
        .funcArea
          h4 Revise the access rights of “{{this.Visible_id.username}}”
          .testfiled Access rights：
            input(type="checkbox" v-model="formVisible" value="hr" id="hr_checkbox")
            label(for="hr_checkbox") HR
            input(type="checkbox" v-model="formVisible" value="ENG&MAIN" id="ENG&MAIN_checkbox")
            label(for="ENG&MAIN_checkbox") ENG & MAIN
            input(type="checkbox" v-model="formVisible" value="CumSer" id="CumSer_checkbox")
            label(for="CumSer_checkbox") CUMSER
            input(type="checkbox" v-model="formVisible" value="PubRel" id="PubRel_checkbox")
            label(for="PubRel_checkbox") PUBREL
          .alertText(v-show="isRegError") {{LoggMessage}}
          .btnGroup
            .btn(@click="updateVisible") Update 
            .btn(@click="()=>{this.showVisible = false}") Cancel 

    .gridContainer
      .funcArea.reg_grid
        h2 Account Registration
        .testfiled 
          span Staff Name：
          input(v-model="reg_realname" )
        .testfiled 
          span Login Name：
          input(v-model="reg_username")
        .testfiled 
          span Password：
          input(v-model="reg_password" type="password")
        .testfiled 
          span Re-enter Password：
          input(v-model="reg_password_confirm" type="password")
        .testfiled 
          span Role：
          select(v-model="reg_premision")
            option(disabled value="") Role--
            option(value="0") Member
            option(value="1") Manager
        .testfiled.DepartmentCheck Department：
          .depart
            input(type="checkbox" v-model="formVisible" value="hr" id="hr_checkbox")
            label(for="hr_checkbox") Human Resources
          .depart
            input(type="checkbox" v-model="formVisible" value="ENG&MAIN" id="ENG&MAIN_checkbox")
            label(for="ENG&MAIN_checkbox") Engineering & Maintenance
          .depart
            input(type="checkbox" v-model="formVisible" value="CumSer" id="CumSer_checkbox")
            label(for="CumSer_checkbox") Customer Services & Relationship
          .depart
            input(type="checkbox" v-model="formVisible" value="PubRel" id="PubRel_checkbox")
            label(for="PubRel_checkbox") Community & Public Relations
        .alertText(v-show="isRegError") {{LoggMessage}}
        .btn(@click="alertSet('register')", :class="{btn_disable: isBtnDisable.reg}") Register 
      .funcArea.delete_grid
        h2 Delete account
        form
          .testfiled 
            span Delete account name：
            input(v-model="del_username")
          .alertText(v-show="isDelError") {{LoggMessage}}
          .btn(@click="alertSet('delete')") Delete
      .funcArea.account_grid
        h2 Manage account
        .testfiled 
          form.flex_Row
            span Account inquiry：
            input(v-model="search_username")
            .btn.search_btn(@click="getAccount(search_username)") Inquire
        .alertText(v-show="isSearchError") {{LoggMessage}}
        Table(:data=[
        ["id", "1", "bold"],
        ["level", "2", "bold"],
        ["userName", "4", "bold"],
        ["Access rights", "6", "bold"]
      ], :hover="false")
        Table(v-for="(val, index) in userList" :data="val" :key="`userList${index}`" @click.native="updateForm(index)")
        .formpage
          .btnGroup
            .btn(@click="pageChange(false)" :class="{btn_disable: isBtnDisable.lastPage}") Pervious page 
            span(style="padding: 0px 10px")  {{nowpage}} 
            .btn(@click="pageChange(true)" :class="{btn_disable: isBtnDisable.nextPage}") Next page 

  .Login(v-else)
    .t 
      h3 {{userData.realname}} Login Success
    .btn.logout_btn(@click="Logout") Logout

</template>

<script>
import axios from 'axios';
import Alert from '../components/Alert';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import Table from '../components/Table';

export default {
  components: {
    Alert,
    Table,
  },
  data() {
    return {
      loginLock: false,
      userList: [],
      isBtnDisable: { lastPage: false, nextPage: false, reg: false },
      showVisible: false,
      Visible_id: '',
      search_username: '',
      isSearchError: '',
      username: '',
      password: '',
      isLogError: false,
      isRegError: false,
      isDelError: false,
      LoggMessage: '',
      reg_username: '',
      reg_password: '',
      reg_premision: '',
      reg_password_confirm: '',
      reg_realname: '',
      del_username: '',
      alertMsg: '',
      alertShow: false,
      alertState: '',
      showcancel: true,
      formVisible: [],
      response: {},
      searchResult: [],
      nowpage: 1,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.userData.level > 0 && vm.isLogin) {
        vm.getAccount();
      }
    });
  },
  computed: {
    ...mapState({
      isLogin: 'isLogin',
      userData: 'userData',
    }),
    alertAlt() {
      var validate;
      var validateMsg = '';
      switch (this.alertState) {
        case 'register':
          if (
            this.reg_username == '' ||
            this.reg_password == '' ||
            this.reg_premision == '' ||
            this.reg_realname == ''
          ) {
            validate = false;
            validateMsg = 'empty';
          }
          return {
            msg: `Confirm to register "${this.reg_username}" ?`,
            validate: validate,
            validateMsg: validateMsg,
          };
        case 'delete':
          if (
            this.reg_username == '' ||
            this.reg_password == '' ||
            this.reg_premision == ''
          ) {
            validate = false;
            validateMsg = 'empty';
          }
          return {
            msg: `Confirm to delete "${this.del_username}" ?`,
            validate: validate,
          };
        default:
          return '';
      }
    },
  },
  methods: {
    ...mapActions({
      editUserdata: 'editUserdata',
      changeLoginState: 'changeLoginState',
    }),
    test() {
      console.log('test');
    },
    updateForm(index) {
      this.Visible_id = this.response.users[index];
      this.showVisible = true;
    },
    async updateVisible() {
      this.isUpdateError = false;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${this.userData.token}`;
      var vm = this;
      try {
        const response = await axios.post(
          `https://csrweb.ahkui.com/api/admin/user/${this.Visible_id.username}/formVisible`,
          {
            formVisible: this.formVisible,
          }
        );
        if (response.data.status) {
          this.isUpdateError = true;
          this.notLoggin('Update Success');
          this.getAccount();
          this.clearInput();
          setTimeout(function() {
            vm.showVisible = false;
          }, 500);
        } else {
          this.isUpdateError = true;
          this.notLoggin(response.data.message);
          this.clearInput();
          setTimeout(function() {
            vm.showVisible = false;
          }, 500);
        }
      } catch (error) {
        console.error(error);
      }
    },
    altLevel(data) {
      var level = data.toString();
      switch (level) {
        case '0':
          return 'Member';
        case '1':
          return 'Manager';
        case '2':
          return 'Super Manager';
      }
      return '123';
    },
    handleAlert(payload) {
      this.alertShow = false;
      if (payload) {
        switch (this.alertState) {
          case 'register':
            this.registerAccount();
            break;
          case 'delete':
            this.deleteAccount();
            break;
          case 'search':
            this.getAccount();
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
    altUserList(data) {
      var vm = this;
      var output = data.users.map((val, index) => {
        var visible = '';
        val.formVisible.forEach((val) => {
          visible = visible.toUpperCase() + val + ' ';
        });
        return [
          [index, '1', 'normal'],
          [vm.altLevel(val.level), '2', 'normal'],
          [val.username, '4', 'normal'],
          [visible, '6', 'normal'],
        ];
      });
      this.userList = output;
    },
    async registerAccount() {
      this.isRegError = false;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          'https://csrweb.ahkui.com/api/admin/user/new',
          {
            username: this.reg_username,
            password: this.reg_password,
            'password-confirm': this.reg_password_confirm,
            realname: this.reg_realname,
            level: this.reg_premision,
            formVisible: this.formVisible,
          }
        );
        if (response.data.status) {
          this.isRegError = true;
          this.notLoggin('Success');
          this.clearInput();
          this.getAccount();
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
        'Authorization'
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.delete(
          `https://csrweb.ahkui.com/api/admin/user/${this.del_username}`
        );
        if (response.data.status) {
          this.isDelError = true;
          this.notLoggin('成功刪除 ' + this.del_username);
          this.clearInput();
          this.getAccount();
        } else {
          this.isDelError = true;
          this.notLoggin(response.data.message);
        }
      } catch (error) {
        console.error(error);
        this.isDelError = true;
        this.notLoggin('找不到帳號 ' + this.del_username);
      }
    },
    pageChange(isNext) {
      if (isNext) {
        this.nowpage += 1;
        this.getAccount(true, this.nowpage);
      } else {
        if (this.nowpage == 1) {
          return;
        }
        this.nowpage -= 1;
        this.getAccount(true, this.nowpage);
      }
    },
    btnClear(state) {
      this.isBtnDisable.nextPage = state;
      this.isBtnDisable.lastPage = state;
      if (this.nowpage == 1) {
        this.isBtnDisable.lastPage = true;
      }
      this.isBtnDisable.reg = state;
    },
    async getAccount(isSearch = false, page = 1) {
      this.btnClear(false);
      var limit = 10;

      var url = '';
      if (isSearch) {
        url = `https://csrweb.ahkui.com/api/admin/user?limit=${limit}&page=${page}&q=${this.search_username}`;
      } else {
        url = `https://csrweb.ahkui.com/api/admin/user?limit=${limit}&page=${page}`;
      }

      this.isSearchError = false;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.get(url);
        if (response.data.status) {
          this.response = response.data;
          this.altUserList(this.response);

          if (this.response.users.length < limit) {
            this.isBtnDisable.nextPage = true;
          }

          // this.isSearchError = true;
          // this.notLoggin("成功刪除 " + this.del_username);
          // this.clearInput();
        } else {
          this.isSearchError = true;
          console.error(response.data.message);
          this.notLoggin(response.data.message);
        }
      } catch (error) {
        console.error(error);
        this.isSearchError = true;
        this.notLoggin('找不到帳號 ' + this.search_username);
      }
    },

    async Logout() {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${this.userData.token}`;
      try {
        const response = await axios.post(
          'https://csrweb.ahkui.com/api/user/logout'
        );
        if (response.data.status) {
          this.changeLoginState();
          this.editUserdata(response.data);
          this.clearState();
        } else {
          this.notLoggin('Logout Fail');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async Loggin() {
      // eslint-disable-next-line no-unreachable
      if (this.loginLock) {
        return;
      }
      this.loginLock = true;
      try {
        const response = await axios.post(
          'https://csrweb.ahkui.com/api/user/login',
          {
            username: this.username,
            password: this.password,
          }
        );
        if (response.data.status) {
          this.isLogError = false;
          this.loginLock = false;
          this.changeLoginState();
          this.editUserdata(response.data);
          this.getAccount();
        } else {
          this.isLogError = true;
          this.loginLock = false;
          this.notLoggin('Account or password not correct');
        }
      } catch (error) {
        this.loginLock = false;
        console.error(error);
      }
    },
    clearState() {
      this.isRegError = false;
      this.isDelError = false;
      this.isLogError = false;
    },
    clearInput() {
      this.reg_username = '';
      this.formVisible = [];
      this.reg_password = '';
      this.reg_premision = '';
      this.reg_password_confirm = '';
      this.reg_realname = '';
      this.del_username = '';
      this.alertMsg = '';
    },
  },
};
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
}
.flex_Row {
  align-items: center;
  flex-direction: row;
}
.Login {
  flex: 5;
  box-sizing: border-box;
  height: 100vh;
  padding: 30px;
  text-align: left;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
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
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
}

.gridContainer {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto 20px 1fr;
  grid-template-rows: auto 20px 1fr;
  grid-template-areas:
    'reg  gap account'
    'no gap account'
    'delete gap account';
}
.account_grid {
  grid-area: account;
  display: flex;
  flex-direction: column;

  .formpage {
    align-self: center;
    flex: 1;
  }
}
.reg_grid {
  grid-area: reg;
  max-width: 500px;
}
.delete_grid {
  grid-area: delete;
  max-width: 500px;
}

.funcArea {
  background-color: #fff;
  padding: 20px;
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

.search_btn {
  margin: 0 10px;
}
.logout_btn {
  margin: -10px 0px 20px 0px;
}

.updateFormVisible {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.52);
  display: flex;
  justify-content: center;
  align-items: center;
}

.DepartmentCheck {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

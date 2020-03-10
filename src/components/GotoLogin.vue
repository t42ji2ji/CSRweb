<template lang="pug">
  .gotoLogin
    .loginDirect
      h1 請先登入
      router-link(to='/login')
        .btn 前往登入 

</template>

<style lang="scss" scoped>
.gotoLogin {
  flex: 5;
  height: 100%;
  padding: 30px;
  text-align: left;
  position: relative;
}
.btn {
  margin-top: 10px;
}
.loginDirect {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
</style>

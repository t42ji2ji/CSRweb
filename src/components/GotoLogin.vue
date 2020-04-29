<template lang="pug">
  .gotoLogin
    .loginDirect
      h1 Please login
      router-link(to='/login')
        .btn Login 

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

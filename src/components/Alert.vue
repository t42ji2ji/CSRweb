<template lang="pug">
  transition(name="bounce")
    .Alert(v-if="isShow")
      .window
        h3 {{msg}}
        .btnGroup
          .btn(@click="btnClick(true)") 確定
          .btn(@click="btnClick(false)" v-if="showcancel") 取消

</template>

<script>
export default {
  props: {
    msg: {
      required: true,
      type: String,
      default: "確定嗎"
    },
    isShow: {
      required: true,
      type: Boolean,
      default: true
    },
    showcancel: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    btnClick(payload) {
      // this.isShow = false;
      this.$emit("alertReturnVale", payload);
      return payload;
    }
  }
};
</script>

<style lang="scss">
.Alert {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.297);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.window {
  width: 400px;
  height: 200px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btnGroup {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .btn {
    margin: 5px;
  }
}
</style>
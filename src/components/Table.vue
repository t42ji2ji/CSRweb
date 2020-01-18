<template lang="pug">
  .tableApp
    //- input style
    .table.tableInput.tableInputBG(v-if="tableType[0]",:class="{ 'tablehover': hover}",)
      .title(:style="{flex: data[0][1], fontWeight: data[0][2], }") {{data[0][0]}}
      .inputContainer(v-for="item in inputArray", type="number",:style="{flex: item[1], fontWeight: item[2]}")
        input.inputStyle(type="number")
    //- dash style
    .table.tableDash(:class="{ 'tablehover': hover}",v-if="tableType[1]")
    //- title style
    .table.tableTitle(:class="{ 'tablehover': hover}",v-if="tableType[2]")
      .title.fz(v-for="(item,index) in data" :style="{flex: item[1], fontWeight: item[2]}") {{item[0]}}
    //- normal Style
    .table(:class="{ 'tablehover': hover}",v-if="tableType[3]")
      .title.fz(v-for="(item,index) in data" :style="{flex: item[1], fontWeight: item[2]}") {{item[0]}}

</template>

<script>
export default {
  name: "Table",
  props: {
    hover: {
      default: true,
      type: Boolean
    },
    data: {
      type: Array
    },
    type: {
      type: String,
      default: ""
    }
  },
  mounted() {},
  computed: {
    inputArray() {
      // console.log(this.data.slice(1).map());
      return this.data.slice(1).map(item => {
        return item;
      });
    },
    tableType() {
      //input dash title
      var returnValue = [false, false, false, false];
      switch (this.type) {
        case "input":
          returnValue = [true, false, false, false];
          break;

        case "dash":
          returnValue = [false, true, false, false];
          break;

        case "title":
          returnValue = [false, false, true, false];
          break;

        default:
          returnValue = [false, false, false, true];
          break;
      }
      return returnValue;
    }
  }
};
</script>

<style scoped lang="scss">
.tableApp {
  width: 100%;
}
.table {
  font-size: 0.8rem;
  padding: 10px;
  display: flex;
  transition: 0.5s;

  .title {
    flex: 1;
    font-weight: bold;
    text-align: left;
    font-size: 1rem;
  }
}
.inputContainer {
  display: flex;
  .inputStyle {
    width: 50%;
    &:focus {
      outline: none;
    }
  }
}

.fz {
  font-size: 1rem;
}

.tableTitle {
  color: white;
  background-color: #42b983 !important;
  border-radius: 6px;
}
.tablehover {
  &:hover {
    transform: translateY(-2px);
    background-color: rgba(245, 245, 245, 0.893);
    cursor: pointer;
  }
}

.tableInput {
  padding: 8px 10px;
}

.tableDash {
  padding: 15px;
}
</style>

<template lang="pug">
  .tableApp
    //- number style
    .table.tableInput.tableInputBG(v-if="tableType[0]",:class="{ 'tablehover': hover}",)
      .title(:style="{flex: data[0][1], fontWeight: data[0][2], }") {{data[0][0]}}
      .inputContainer(v-for="(item, index) in inputArray", type="number",:style="{flex: item[1], fontWeight: item[2]}")
        input.inputStyle(type="number", v-model="form.parentId[index]")
    //- textArea style
    .table.tableInput.tableInputBG(v-if="tableType[4]",:class="{ 'tablehover': hover}",)
      .title(:style="{flex: data[0][1], fontWeight: data[0][2], }") {{data[0][0]}}
      .inputContainer(v-for="(item, index) in inputArray", :style="{flex: item[1], fontWeight: item[2]}")
        textarea.inputStyle(type="number", v-model="form.parentId[index]")
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
import { mapActions } from "vuex";
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
    },
    refid: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      form: {
        parentId: []
      }
    };
  },
  watch: {
    form: {
      handler(newval, oldval) {
        console.log(newval.parentId, oldval);
        console.log(this.tag);
        this.addUploadData([this.tag, newval.parentId]);
      },
      deep: true
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      addUploadData: "addUploadData"
    })
  },
  computed: {
    inputArray() {
      return this.data.slice(1).map(item => {
        return item;
      });
    },
    tableType() {
      //input dash title
      var returnValue = [false, false, false, false, false];
      switch (this.type) {
        case "input":
          returnValue = [true, false, false, false, false];
          break;

        case "text":
          returnValue = [false, false, false, false, true];
          break;

        case "dash":
          returnValue = [false, true, false, false, false];
          break;

        case "title":
          returnValue = [false, false, true, false, false];
          break;

        default:
          returnValue = [false, false, false, true, false];
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
  box-sizing: border-box;
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
  background-color: #42b983c8 !important;
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
  margin-bottom: 80px;
}
</style>

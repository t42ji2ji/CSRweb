<template lang="pug">
  .tableApp(@click="handleClick")
    //- number style
    .table.tableInput.tableInputBG(v-if="tableType[0]",:class="{ 'tablehover': hover}",)
      .title(:style="{flex: data[0][1], fontWeight: data[0][2], }" contenteditable="true" @input="onInput") {{data[0][0]}}
      .inputContainer(v-for="(item, index) in inputArray", type="number",:style="{flex: item[1], fontWeight: item[2]}")
        input.inputStyle(type="number", v-model="form.parentId[index]" @input="editValue(index, $event)")
    //- textArea style
    .table.tableInput.tableInputBG(v-if="tableType[4]",:class="{ 'tablehover': hover}",)
      .title(:style="{flex: data[0][1], fontWeight: data[0][2], }") {{data[0][0]}}
      .inputContainer(v-for="(item, index) in inputArray", :style="{flex: item[1], fontWeight: item[2]}")
        textarea.inputStyle(type="number", v-model="form.parentId[index]" @input="editValue(index, $event)")
    //- dash style
    .table.tableDash(:class="{ 'tablehover': hover}",v-if="tableType[1]")
    //- title style
    .table.tableTitle(:class="{ 'tablehover': hover}",v-if="tableType[2]")
      .title.fz(v-for="(item,index) in data" :style="{flex: item[1], fontWeight: item[2]}") {{item[0]}}
    //- normal Style
    .table(:class="{ 'tablehover': hover}",v-if="tableType[3]")
      .title.fz(v-for="(item,index) in data" :style="{flex: item[1], fontWeight: item[2]}") {{item[0]}}
    //- add Style
    .table(:class="{'tablehover': hover}",v-if="tableType[5]")
      .title.fz.add(v-for="(item,index) in data" :style="{flex: item[1], fontWeight: item[2]}",) 
        font-awesome-icon(icon="plus-circle" @click="addRow") Add

    .btn.deleteTable(v-if="deletBtn" ,@click="handleDel($event)") delete
    .btn.deleteRow(v-if="deletRow" ,@click="handleDeletRow") x


</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Table",
  props: {
    deletBtn: {
      default: false,
      type: Boolean
    },
    deletRow: {
      default: false,
      type: Boolean
    },
    questionIndex: {
      default: null,
      type: Number
    },
    qIndex: {
      default: null,
      type: Number
    },
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
      // eslint-disable-next-line no-unused-vars
      handler(newval, oldval) {
        this.addUploadData([this.tag, newval.parentId]);
      },
      deep: true
    },
    blackBg: {
      // eslint-disable-next-line no-unused-vars
      handler(newval, oldval) {
        this.form.parentId = [];
        var inputTag = document.querySelectorAll("input");
        inputTag.forEach(value => {
          value.value = "";
        });
      }
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      addUploadData: "addUploadData"
    }),
    handleDeletRow() {
      this.$emit("handleDeletRow", this.questionIndex, this.qIndex);
    },
    onInput(e) {
      // console.log(e.target.innerText, this.questionIndex, this.qIndex);
      this.$emit(
        "editRow",
        e.target.innerText,
        this.questionIndex,
        this.qIndex
      );
    },
    editValue(index, event) {
      this.$emit(
        "editValue",
        this.questionIndex,
        this.qIndex,
        index,
        event.target.value
      );
    },
    addRow() {
      this.$emit("addRow", this.questionIndex);
    },
    handleDel(event) {
      event.stopPropagation();
      this.$emit("delete");
    },
    handleClick() {
      this.$emit("openTable");
    }
  },
  computed: {
    ...mapState({ blackBg: "blackBg" }),
    inputArray() {
      return this.data.slice(1).map(item => {
        return item;
      });
    },
    tableType() {
      //input dash title text add
      var returnValue = [false, false, false, false, false, false];
      switch (this.type) {
        case "input":
          returnValue = [true, false, false, false, false, false];
          break;

        case "dash":
          returnValue = [false, true, false, false, false, false];
          break;

        case "title":
          returnValue = [false, false, true, false, false, false];
          break;

        case "text":
          returnValue = [false, false, false, false, true, false];
          break;

        case "add":
          returnValue = [false, false, false, false, false, true];
          break;

        default:
          returnValue = [false, false, false, true, false, false];
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
  position: relative;
}
.table {
  font-size: 0.8rem;
  padding: 10px;
  display: flex;
  transition: 0.5s;

  .title {
    display: block;
    flex: 1;
    font-weight: bold;
    text-align: left;
    font-size: 1rem;
    padding: 0px 2px;
  }
  .add {
    text-align: center;
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

.deleteTable {
  height: 15px;
  line-height: 15px;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 10px;
  font-size: 0.8rem;
}
.deleteRow {
  width: 30px;
  height: 15px;
  line-height: 15px;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 10px;
  font-size: 0.8rem;
  border: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0);
    color: #4fe09fc8;
  }
}
</style>

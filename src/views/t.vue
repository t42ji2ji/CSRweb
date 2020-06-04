<template lang="pug">
  .Report(v-if="true")
    h2 表格生成
    h4 report generation
    .flobatbtnGroup
      .floatbtn(@click="toPdf") +
      .btnInfo PDF
    .uploadGroups
      .uploadGroup
        h2 Upload excel
        .btnset
          h4 Human Resources 
            span {{fileName_HR}}
          .btn(@click="handleUpload(0)") upload
        .btnset
          h4 Engineering & Maintenance 
            span {{fileName_EM}}
          .btn(@click="handleUpload(1)") upload
        .btnset
          h4 Customer Services & Relationship 
            span {{fileName_CSR}}
          .btn(@click="handleUpload(2)") upload
        .btnset
          h4 Community & Public Relations 
            span {{fileName_CPR}}
          .btn(@click="handleUpload(3)") upload
      //-     year: "1995",
      //- companyName: "companyName",
      //- address: "this is address",
      //- website: "https://thisiswebsite.com",
      //- email: "thisisemail@gmail.com",
      .uploadGroup
        h2 info
        .btnset
          h4 year 
          input(v-model="year")
        .btnset
          h4 companyName 
          input(v-model="companyName")
        .btnset
          h4 address 
          input(v-model="address")
        .btnset
          h4 website 
          input(v-model="website")
        .btnset
          h4 email 
          input(v-model="email")
        .btnset
          h4 hyperlink 
          input(v-model="hyperlink")
        .btnset
          h4 name of audit firm 
          input(v-model="audit_firm")

    .reportWrapper
      .pdf(ref="pdf")
        .reportWrapper-cover.pageSetting
          h1 logo
          h4 {{companyName}}
          h4 Corporate Responsibility and Sustainability Report {{year}}
          img(:src="imgSource", width="100")
        .reportWrapper-commonpage.pageSetting
          h2 About This Report
          p We aim to provide a connected view of different aspects of our performance, financial and nonfinancial, enabling our stakeholders to have a holistic view of our company. This Corporate Responsibility and Sustainability Report {{year}} is produced with the intention that it is read together with our Annual Report, with this icon showing relevant linkages in the Annual Report {{hyperlink}}. We continue to share the challenges and successes of our sustainability journey over the past year. This medium is just one of the ways we engage with our stakeholders; in addition, we regularly hold meetings with interested stakeholders to discuss our sustainability performance in more detail. Feel free to reach out to us if you want to find out more.

          h3 Reporting Scope
          p This report mainly focuses on human resource, properties and maintenance, environmental and safety, customer service and relationship management, community and public relation aspects. It covers most of the information concerned by various stakeholder groups.

          h3 Reporting Standards and Assurance
          p This report complies with the “comply or explain” provisions in the Hong Kong Stock Exchange’s (HKEx) Environmental, Social, and Governance Reporting Guide (ESG Guide), which includes a number of relevant recommended disclosures (read together with the Annual Report) and this report has been prepared in accordance with the Global Reporting Initiative Sustainability Reporting Standards (GRI Standards): Core option, and references the International Integrated Reporting Framework from the International Integrated Reporting Council (IIRC) (read together with the Annual Report) and Task Force on Climate-related Financial Disclosures (TCFD).
        .reportWrapper-commonpage.pageSetting
          p(v-if="audit_firm") {{audit_firm}} was commissioned to conduct assurance and to provide an independent opinion on identified elements of this report in accordance with the HKEx ESG Guide. 
          p We welcome your feedback. Please share your views with us by post or email: <br> Company Name : {{companyName}} <br> Address : {{address}} <br> Website : {{website}} <br> Enail : {{email}}
        .reportWrapper-commonpage.pageSetting
          h2 Contents
          //- <br>OUR SUSTAINABILITY VISION	5
          //- <br>Message from the Management	6
          //- <br>Governance	7
          //- <br>Responsible Business	7
          //- <br>Responsible Gaming	8
          //- <br>Our People	10
          //- <br>Employment and Caring Workplace	10
          //- <br>Training and Development	12
          //- <br>Occupational Safety and Health	13
          //- <br>Our Community	14
          //- <br>Donation and Participation	14
          //- <br>Collaboration and Core Community Program	15
          //- <br>Major Recognitions and Awards	16
          //- <br>Our Environment	17
          //- <br>Energy Efficiency	17
          //- <br>Waste Management	18
          //- <br>Environmental Awareness	19
          //- <br>Our Customer	20


        .reportWrapper-commonpage.pageSetting

          Anaylsis(:fileTotal="fileTotalCut(0, 0,fileTotal_HR)", :fileTotalText="fileTotalText(fileData_HR)",v-if="!(fileData_HR.fileConfig == undefined)", :fileName="fileData_HR.fileConfig.name")

          Anaylsis(:fileTotal="fileTotalCut(0, 1,fileTotal_HR)", :fileTotalText="fileTotalText(fileData_HR)",v-if="!(fileData_HR.fileConfig == undefined)", :fileName="fileData_HR.fileConfig.name")

          Anaylsis(:fileTotal="fileTotal_CPR", :fileTotalText="fileTotalText(fileData_CPR)",v-if="!(fileData_CPR.fileConfig == undefined)", :fileName="fileData_CPR.fileConfig.name", :dataview="[3,4]")

         

          Anaylsis(:fileTotal="fileTotal_CPR", :fileTotalText="fileTotalText(fileData_CPR)",v-if="!(fileData_CPR.fileConfig == undefined)", :fileName="fileData_CPR.fileConfig.name", :dataview="[2]")

          Anaylsis(:fileTotal="fileTotal_EM", :fileTotalText="fileTotalText(fileData_EM)",v-if="!(fileData_EM.fileConfig == undefined)", :fileName="fileData_EM.fileConfig.name", :dataview="[0,4]")
      

          Anaylsis(:fileTotal="fileTotal_EM", :fileTotalText="fileTotalText(fileData_EM)",v-if="!(fileData_EM.fileConfig == undefined)", :fileName="fileData_EM.fileConfig.name", :dataview="[5]")

          Anaylsis(:fileTotal="fileTotal_CSR", :fileTotalText="fileTotalText(fileData_CSR)",v-if="!(fileData_CSR.fileConfig == undefined)", :fileName="fileData_CSR.fileConfig.name", :dataview="[0,1,2,3]")

          Anaylsis(:fileTotal="fileTotal_CSR", :fileTotalText="fileTotalText(fileData_CSR)",v-if="!(fileData_CSR.fileConfig == undefined)", :fileName="fileData_CSR.fileConfig.name", :dataview="[4]")










 



  GotoLogin(v-else="isLogin")


</template>

<script>
import toPdf from "../mixins/toPdf";
import HR from "../components/questions/HR";
import Anaylsis from "../components/questions/Anaylsis";

import GotoLogin from "../components/GotoLogin";
import { mapState, mapActions } from "vuex";
import questionPlugin from "../assets/questionData/question_plugin";
import ExtractExcel from "../assets/assetsJs/extract";
import Excel from "../assets/assetsJs/excel";

export default {
  components: { GotoLogin, HR, Anaylsis },
  mixins: [toPdf],
  computed: {
    ...mapState({
      isLogin: "isLogin",
    }),
  },
  data() {
    return {
      fileData_HR: {},
      fileTotal_HR: {},
      fileName_HR: "",
      fileData_EM: {},
      fileTotal_EM: {},
      fileName_EM: "",
      fileData_CSR: {},
      fileTotal_CSR: {},
      fileName_CSR: "",
      fileData_CPR: {},
      fileTotal_CPR: {},
      fileName_CPR: "",
      year: "1995",
      companyName: "companyName",
      address: "this is address",
      website: "https://thisiswebsite.com",
      email: "thisisemail@gmail.com",
      imgSource:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png",
      hyperlink: "https://hyperlink.com",
      audit_firm: "audit_firms",
    };
  },
  methods: {
    ...mapActions({
      changeUploadVisible: "changeUploadVisible",
    }),
    toPdf() {
      this.$nextTick(() => {
        console.log(this.$refs.pdf);
        this.mixins_toPdf(this.$refs.pdf, "output");
      });
    },
    fileTotalText(data) {
      var output = data.questions.map((val) => {
        var x = val.q.map((val) => {
          if (val.type == "textview") {
            return val.data;
          }
        });

        if (x != undefined) return x;
      });
      return output;
    },
    fileTotalCut(index, step, filetotal) {
      var cutTotal = [];
      switch (index) {
        case 0:
          switch (step) {
            case 0:
              cutTotal = filetotal.map((val) => {
                return val.slice(0, 3);
              });
              return cutTotal;
            case 1:
              cutTotal = filetotal.map((val) => {
                return val.slice(4);
              });
              return cutTotal;
            default:
              break;
          }
          break;
        case 3:
          switch (step) {
            case 0:
              cutTotal = filetotal.map((val) => {
                return val.slice(0, 2);
              });
              return cutTotal;
            case 1:
              cutTotal = filetotal.map((val) => {
                return val.slice(3);
              });
              return cutTotal;
            default:
              break;
          }
          break;
        default:
          return "";
      }
    },
    handleUpload(index) {
      // eslint-disable-next-line no-unused-vars
      Excel.importExcel((data, dataRef, filename) => {
        var vm = this;
        switch (index) {
          case 0:
            this.fileData_HR = ExtractExcel.extractData(data);
            this.fileTotal_HR = ExtractExcel.calcTotal(data);
            this.fileName_HR = filename.name;
            this.fileData_HR.fileConfig.name = "Human Resources";
            questionPlugin.hr_plugin.forEach((val) => {
              console.log(val);
              vm.fileData_HR.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          case 1:
            this.fileData_EM = ExtractExcel.extractData(data);
            this.fileTotal_EM = ExtractExcel.calcTotal(data);
            this.fileName_EM = filename.name;
            this.fileData_EM.fileConfig.name = "Engineering & Maintenance";
            questionPlugin.engmain_plugin.forEach((val) => {
              vm.fileData_EM.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          case 2:
            this.fileData_CSR = ExtractExcel.extractData(data);
            this.fileTotal_CSR = ExtractExcel.calcTotal(data);
            this.fileName_CSR = filename.name;
            this.fileData_CSR.fileConfig.name =
              "Customer Services & Relationship";
            questionPlugin.cumser_plugin.forEach((val) => {
              vm.fileData_CSR.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          case 3:
            this.fileData_CPR = ExtractExcel.extractData(data);
            this.fileTotal_CPR = ExtractExcel.calcTotal(data);
            this.fileName_CPR = filename.name;
            this.fileData_CPR.fileConfig.name = "Community & Public Relations";
            questionPlugin.pubrel_plugin.forEach((val) => {
              vm.fileData_CPR.questions[val].q.forEach((val, index, array) => {
                if (index > 0) {
                  array[index].type = "textview";
                }
              });
            });
            break;
          default:
            break;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  white-space: pre-line;
}

.Report {
  flex: 5;
  height: 100%;
  padding: 30px;
  text-align: left;
  position: relative;
  overflow-y: scroll;
  h2 {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
}

.uploadGroups {
  display: flex;
}
.uploadGroup {
  background: white;
  padding: 5px 10px;
  margin: 5px 0px;
  width: 500px;
  span {
    color: rgb(125, 221, 149);
  }
  .btnset {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0px;
    .btn {
      margin: 0;
    }
  }
}

.reportWrapper {
  background-color: rgb(246, 246, 246);
  display: flex;
  align-items: center;
  flex-direction: column;
  .pageSetting {
    background-color: #fff;
    width: 605px;
    min-height: 978px;
    padding: 40px;
    box-sizing: border-box;
  }
  &-cover {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
  &-commonpage {
  }
}
</style>

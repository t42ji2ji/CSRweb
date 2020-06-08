<template lang="pug">
  .Report(v-if="true")
    h2 Report Generation
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

    .reportWrapper(ref="printR")
      .pdf(ref="printD")
        .reportWrapper-cover.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h1 logo
            h4 {{companyName}}
            h4 Corporate Responsibility and Sustainability Report {{year}}
            img(:src="imgSource", width="100")

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h2 About This Report
            p(contenteditable="true") We aim to provide a connected view of different aspects of our performance, financial and nonfinancial, enabling our stakeholders to have a holistic view of our company. This Corporate Responsibility and Sustainability Report {{year}} is produced with the intention that it is read together with our Annual Report, with this icon showing relevant linkages in the Annual Report {{hyperlink}}. We continue to share the challenges and successes of our sustainability journey over the past year. This medium is just one of the ways we engage with our stakeholders; in addition, we regularly hold meetings with interested stakeholders to discuss our sustainability performance in more detail. Feel free to reach out to us if you want to find out more.

            h3 Reporting Scope
            p(contenteditable="true") This report mainly focuses on human resource, properties and maintenance, environmental and safety, customer service and relationship management, community and public relation aspects. It covers most of the information concerned by various stakeholder groups.

            h3 Reporting Standards and Assurance
            p(contenteditable="true") This report complies with the “comply or explain” provisions in the Hong Kong Stock Exchange’s (HKEx) Environmental, Social, and Governance Reporting Guide (ESG Guide), which includes a number of relevant recommended disclosures (read together with the Annual Report) and this report has been prepared in accordance with the Global Reporting Initiative Sustainability Reporting Standards (GRI Standards): Core option, and references the International Integrated Reporting Framework from the International Integrated Reporting Council (IIRC) (read together with the Annual Report) and Task Force on Climate-related Financial Disclosures (TCFD).
            p(v-if="audit_firm" contenteditable="true") {{audit_firm}} was commissioned to conduct assurance and to provide an independent opinion on identified elements of this report in accordance with the HKEx ESG Guide. 

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            p We welcome your feedback. Please share your views with us by post or email: <br> Company Name : {{companyName}} <br> Address : {{address}} <br> Website : {{website}} <br> Enail : {{email}}

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          h2 Contents
          .content.contents
            .content-item 
              span OUR SUSTAINABILITY VISION
              span 5
            .content-item
              span Message from the Management
              span 	6
            .content-item
              span Governance
              span 	7
            .content-item.content-item-sub
              span Responsible Business
              span 	7
            .content-item.content-item-sub
              span Responsible Gaming
              span 	8
            .content-item
              span Our People	
              span 10
            .content-item.content-item-sub
              span Employment and Caring Workplace
              span 10
            .content-item.content-item-sub
              span Training and Development	
              span 12
            .content-item.content-item-sub
              span Occupational Safety and Health	
              span 13
            .content-item
              span Our Community	
              span 14
            .content-item.content-item-sub
              span Donation and Participation	
              span 14
            .content-item.content-item-sub
              span Collaboration and Core Community Program
              span 15
            .content-item.content-item-sub
              span Major Recognitions and Awards	
              span 16
            .content-item
              span Our Environment	
              span 17
            .content-item.content-item-sub
              span Energy Efficiency	
              span 17
            .content-item.content-item-sub
              span Waste Management	
              span 18
            .content-item.content-item-sub
              span Environmental Awareness	
              span 19
            .content-item
              span Our Customer	
              span 20


        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h3.contentTitle OUR SUSTAINABILITY VISION
            p(contenteditable="true") [Our long-term mindset and approach provides the foundation for us to successfully manage and operate our company. This approach is rooted in our key philosophies of conducting business with the highest level of integrity, respecting history and heritage, maintaining the best brand and reputation and passing on to future generations a portfolio of the highest quality assets, which are aligned with the principles of sustainability. Our business thrives when our people and communities do. As such, we remain committed to having a positive social, economic and environmental benefit on the local communities and the wider societies in which we operate. This means not only meeting local regulations, but also, where possible, aligning to international best practice and society’s evolving expectations. We believe that taking care of our people and the world around us is simply the right thing to do. We recognise that there could be a perceived conflict between the traditional idea of business operation and the principles of sustainability. To bridge this perceived gap can be challenging. However, we believe that our attention to detail and quest to provide the highest quality service will make sustainability part of the appeal of our service offering. Sustainable operation is an integral part of our long-term mindset. We aim to properly manage risk as well as invest in the right opportunities while enabling a sense of belonging by offering services that are sustainable, thoughtful and purposeful to the needs of our guests and customers.]

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h3.contentTitle Message from the Management
            p(contenteditable="true") [We regard corporate sustainability as a sensible and necessary business decision that benefits the overall value of the group in both the short and long term. We continue to witness the impacts of longer-term sustainability trends such as climate change, natural resource constraints, rising economic and social inequality becoming more significant in the eyes of our stakeholders. I chair the Group Corporate Responsibility Committee because senior management believes that a topic this important requires our serious attention and focus.]
        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h3.contentTitle Governance
            p(contenteditable="true") [Corporate responsibility is deeply rooted in our culture and values. It represents our commitment to the planet, local communities and the people that visit, support or work at our company. Overall sustainability governance ultimately lies with the company’s Executive team (refer to the annual report [hyperlink to AR]. Day to day implementation is managed at the local level in order to reflect the challenges and opportunities that are relevant to each operation.The Board of Directors (the “Board”) is our highest governing body. Composed of [no. of ED] Executive Directors and [no. of INED] Independent Non-Executive Directors, the Board is responsible for overseeing the Company’s strategic development, and has established four separate Board Committees to set appropriate policies on different company affairs. Delegated by the Board, the Executive Committee is responsible for designing, implementing and monitoring risk management and internal control systems. Taking into consideration factors including economic matters, the environment, social issues, legislation and regulation as well as stakeholders’ expectations, the Executive Committee regularly identifies, evaluates and keeps track of risks in accordance with our risk management framework. The Board is responsible for continuous review of the effectiveness of the systems.] 
            h4.contentsubTitle Responsible Business
            p <b>Ethics, Transparency and anti-corruption</b><br>
              span(contenteditable="true") [We are committed to the highest standards of business ethics. Guided by our Code of Conduct and anti-corruption policy, our entire workforce is required to adhere to practices relating to the prevention of bribery, fraud and corruption. Apart from communicating relevant policies to all new recruits during induction sessions, regular seminars with guest speakers from the Commission Against Corruption (CCAC) of Macao. are provided to our staff. During the reporting year, over [input no. of staff] staff members attended anti-corruption training courses.]
            p(contenteditable="true") Our ongoing project protect responsible gaming includes: 
            ul(contenteditable="true") 
              li Macau Penal Code;
              li The rules of the Convention on Combating Bribery of Foreign Public Officials in International Business Transactions (the “OECD Convention”)
              li Anti-corruption policy
              li Charitable contributions and sponsorships policy
              li Code of Business conduct and ethics
              li Compliance program
              li Conflicts of interest policy
              li Politically exposed person standard operating procedure
              li Reporting and non-retaliation policy
              li Supplier code of conduct
              li Third-party travel, gifts and entertainment policy
              li Anti-money laundering procedure
              li Privacy policy (Macao personal data protection Act)
            h4.contentsubTitle Responsible Gaming 
            p(contenteditable="true") [At our company, our guests can visitors can enjoy a wide range of entertainment. Committed to their well-being as well as the wellbeing of the greater Macao community, we remain firm in our support of responsible gaming. We have been setting an example by establishing self-exclusion and other comprehensive responsible gaming programs, as well as remain in full support of the Gaming Inspection and Coordination Bureau (“DICJ”)]

            p(contenteditable="true") Our ongoing project protect responsible gaming includes: 
            ul(contenteditable="true") 
              li Team member training
              li Ambassador assistance
              li Prominent signage for resources
              li Partnering with local organizations
              li Others

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h3.contentTitle Our People
            p(contenteditable="true") [Our people form the core of our business, and their continued support has been critical in forming the solid foundation of our business and strong ties with society. To maintain a motivated and dedicated workforce, we emphasize training and career development, competitive remuneration and benefits, occupational health and safety as well as a healthy work-life balance. We strive to sustain a workplace environment which embraces innovation and diversity, and where employees are treated equally and fairly, and their views are heard and valued.]
            h4.contentsubTitle Employment and Caring Workplace
            p(contenteditable="true") [As an equal opportunity employer, we believe that building a stable workforce and cultivating a harmonious workplace starts with embracing diversity. Therefore, we ensure equal opportunities in every area, including compensation and benefits, recruitment, promotion and transfer, and training and development. We do not tolerate any kind of discrimination based on race, religion, gender, marital status, age, national origin, or any other considerations deemed irrelevant by local labour laws. ]
            //- HR(:fileData="fileData_HR", :fileName="fileName_HR",v-if="!(fileData_HR.fileConfig == undefined)")


          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_HR", :fileTotalText="fileTotalText(fileData_HR)",v-if="!(fileData_HR.fileConfig == undefined)", :fileName="fileData_HR.fileConfig.name", :dataview="[0,1,2,3]")

          .content
            p(contenteditable="true") [When there are vacant positions, we also give priority to qualified internal candidates prior to recruiting from external sources, whenever possible. As at the end of {{year}}, the employee turnover rate of the Group was {{fileTotal_HR ? (((fileTotal_HR[3][3][1][0] + fileTotal_HR[3][2][1][0])/fileTotal_HR[3][0][1][0])*100).toFixed(1) : ''}}% for male employees and {{fileTotal_HR ? (((fileTotal_HR[3][3][2][0] + fileTotal_HR[3][2][2][0])/fileTotal_HR[3][0][2][0])*100).toFixed(1) : ''}}% for female employees; and {{fileTotal_HR ? ((fileTotal_HR[3][1][1][0] + fileTotal_HR[3][1][2][0]) -(fileTotal_HR[1][1][2][0]+fileTotal_HR[1][1][2][1])) : ''}} for employees aged below 40 and {{fileTotal_HR ? ((fileTotal_HR[1][1][2][0]+fileTotal_HR[1][1][2][1])) : ''}} for employees aged over 40.In order to retain a loyal workforce, competitive compensation packages or fringe benefits are provided to our employees based on job responsibilities, performance and their contributions as well as their professional and managerial competencies. Employees undergo annual appraisals and are rewarded appropriately according to their performance and contributions to the company’s development.]

            h4 Compensation packages and fringe benefits:
            ul(contenteditable="true") 
              li Medical and Life Insurance Scheme
              li Annual leave
              li Sick Leave
              li Compassionate leave
              li Marriage leave
              li Jury Service Leave
              li Maternity leave
              li Study leave
              li Pension fund
              li Study subsidy
              
            h4.contentsubTitle Training and Development
            p(contenteditable="true") [Enriching the knowledge and skills of our employees is crucial to sustainable business development as we depend on our employees’ professionalism and expertise to deliver quality services to our customers and drive business growth. Our Training and Development Sponsorship Scheme guides our dedication in supporting the enhancement of employee skills and competencies. When determining the training needs of individual staff, we set objectives and desired outcomes and continually review the subsequent results of any training received. We encourage our employees to pursue further education at external educational institutions by providing sponsorship or arranging specific training and development courses by external training companies.]



          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_HR", :fileTotalText="fileTotalText(fileData_HR)",v-if="!(fileData_HR.fileConfig == undefined)", :fileName="fileData_HR.fileConfig.name", :dataview="[4,5]")
          
          
          .content
            p(contenteditable="true") Percentage of employees receiving regular performance and career development review: {{fileTotal_HR ? (((fileTotal_HR[3][5][1][0] + fileTotal_HR[3][5][2][0])/(fileTotal_HR[3][0][1][0]+ fileTotal_HR[3][0][2][0]))*100).toFixed(1) + '%' : ''}}
            p(contenteditable="true") Cost spent on Training and Education: {{fileTotal_HR ? (fileTotal_HR[3][7][1][0]) : ''}}

            h4.contentsubTitle Occupational Safety and Health
            p(contenteditable="true") [We actively provide training to our employees to educate them on the importance of OSH. A key component of our OSH Training Programme is written assessments, which ensure that course participants have retained a good understanding of the main safety messages from the OSH training courses.]

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h3.contentTitle Our Community
            p(contenteditable="true") 
              | [The success of our business is inextricably linked to the success and sustainability of the cities and communities where we operate. These communities provide the resources, infrastructure and markets that our businesses rely on. It is essential that they benefit from having us there.
              | We believe we have a responsibility to deliver positive, lasting impacts that contribute shared and sustained value for all.We recognise that different communities face distinct challenges, and for this reason, each department tailors their efforts to match community needs through local action plans. We engage and invest in our local communities in a manner that responds to their needs in a strategic, relevant and focused way. Our volunteering and community initiatives also emphasise the manner and importance of delivering care, a skill that is integral in our daily work.]
            h4.contentsubTitle Donation and Participation
            p(contenteditable="true")  In {{year}}, we recorded over MOP {{fileTotal_CPR ? fileTotal_CPR[3][0][1][0]: ''}},000 in total cash donations to charitable organizations focused in following areas: 

            p(contenteditable="true")  In {{year}}, the number of [add the name of company’s community service team] Ambassadors is [insert number]. 
          
          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_CPR", :fileTotalText="fileTotalText(fileData_CPR)",v-if="!(fileData_CPR.fileConfig == undefined)", :fileName="fileData_CPR.fileConfig.name", :dataview="[0,1]")

          
          .content
            h4.contentsubTitle Collaboration and Core Community Program
            p(contenteditable="true")  During the reporting year, we joined hands with many of our stakeholders, including our employees, their families and friends, and our like-minded strategic partners to serve the communities in which we operate.

          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_CPR", :fileTotalText="fileTotalText(fileData_CPR)",v-if="!(fileData_CPR.fileConfig == undefined)", :fileName="fileData_CPR.fileConfig.name", :dataview="[3,4]")



          .content
            h4.contentsubTitle Major Recognitions and Awards
            p(contenteditable="true")  We strive to deliver excellent community services, whilst creating a positive social and environmental impact. Our efforts have earned us a variety of accolades. The following table lists the awards and recognitions garnered by the company in {{year}}, arranged in alphabetical order.

          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_CPR", :fileTotalText="fileTotalText(fileData_CPR)",v-if="!(fileData_CPR.fileConfig == undefined)", :fileName="fileData_CPR.fileConfig.name", :dataview="[2]")


        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h3.contentTitle Our Environment
            p(contenteditable="true") [We have long been committed to minimizing and mitigating the environmental impacts that may arise from operations, whilst delivering excellent and extraordinary customer service in the industry. We strive to make the most effective and efficient use of resources, and instil a sense of environmental responsibility into employees. We actively conduct regular environmental reviews and inspections to evaluate the status of compliance against applicable environmental legislation and requirements. During the reporting year, we complied with all relevant environmental laws and regulations at all locations where we operate including [company can fill in locations, e.g Macao, Hong Kong].]

            h4.contentsubTitle Collaboration and Core Community Program
            p(contenteditable="true") [Given the business nature, our daily operations consume a considerable amount of energy each year. Committed to efficiently and wisely consuming resources as well as minimizing carbon footprints, we seize every opportunity to adopt measures and actions to reduce our energy consumption.]

          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_EM", :fileTotalText="fileTotalText(fileData_EM)",v-if="!(fileData_EM.fileConfig == undefined)", :fileName="fileData_EM.fileConfig.name", :dataview="[0,4]")


          .content
            h4.contentsubTitle Waste Management
            p(contenteditable="true") [Carefully managing and reducing the waste generated from our operations helps to conserve the earth’s scarce resources. We adopt a holistic approach to waste management to minimize waste generation, to reduce unnecessary waste consumption, and to recycle and recover waste materials to create value and benefit the community. To understand the volume and type of waste generated in our operations, recycling data is tracked, monitored and analyzed on a daily, weekly and monthly basis. Under our recycling scheme, we recycle a wide array of items, including plastic, carton boxes, office paper, metals, batteries, glass bottles and used cooking oil.] 

          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_EM", :fileTotalText="fileTotalText(fileData_EM)",v-if="!(fileData_EM.fileConfig == undefined)", :fileName="fileData_EM.fileConfig.name", :dataview="[5]")

          .content
            p [Freshwater is a precious and scarce natural resource, therefore, we are conscious to adopt water-saving measures at our properties. During the reporting year, total water consumed is {{fileTotal_EM ? (fileTotal_EM[3][1][1][0]) + ' m3' : ''}} and total water consumed by intensity is [system auto-calculated by dividing GFA as mentioned in above comment box].  Besides, our company also supports the procurement department to source more sustainable solutions across different areas, from sustainable seafood to products that have less packaging. Total packaging material used during the reporting year is [1.8 tonnes] for [120000 units] produced. ]

            h4.contentsubTitle Environmental Awareness
            p(contenteditable="true") It is enssential to building internal environmental awareness, following projects have been active during the reporting year.
            p 1. Creating a Renewable Future – Installation of Solar Panel 
            p(contenteditable="true") [We recognize the importance of identifying, harnessing and implementing feasible sustainable energy options to reduce carbon footprints and minimize the environmental impacts of our operations. Therefore, we are taking a step forward to invest in renewable energy by undertaking a solar panel installation project, which have significant energy consumptions every year. We plan to install 8,924 solar modules, which can generate 3,245 MWh of electricity. The solar modules are capable of generating enough energy for 1,400 households per year. We will continue to explore other opportunities and feasible energy options to operate our business in an environmentally-responsible manner and to create a sustainable future.]

            p 2. Waste Management

            p(contenteditable="true") [Carefully managing and reducing the waste generated from our operations helps to conserve the earth’s scarce resources. We adopt a holistic approach to waste management to minimize waste generation, to reduce unnecessary waste consumption, and to recycle and recover waste materials to create value and benefit the community. To understand the volume and type of waste generated in our operations, recycling data is tracked, monitored and analyzed on a daily, weekly and monthly basis. Under our recycling scheme, we recycle a wide array of items, including plastic, carton boxes, office paper, metals, batteries, glass bottles and used cooking oil. During the reporting year, we have disposed of and transported 14,265.12 tonnes (0.011 tonnes per GFA*) of general waste to waste treatment facilities. ]

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            h3.contentTitle Our Customer
            p(contenteditable="true") [We believe an experience that is curated around an individual can also make a positive impact on the world. We aim to enhance our customers’ experience without compromising the wellbeing of people, our communities or the environment. Our goal is to provide everlasting memories by continuously monitoring customer satisfaction.]

          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_CSR", :fileTotalText="fileTotalText(fileData_CSR)",v-if="!(fileData_CSR.fileConfig == undefined)", :fileName="fileData_CSR.fileConfig.name", :dataview="[0,1,2,3]")

          
          .content
            p As part of an ongoing effort to deliver high quality products and services, our company achieved following accreditations: 

          Anaylsis(:adjust="chartAdjust" :fileTotal="fileTotal_CSR", :fileTotalText="fileTotalText(fileData_CSR)",v-if="!(fileData_CSR.fileConfig == undefined)", :fileName="fileData_CSR.fileConfig.name", :dataview="[4]")

          
          .content
            p We maintain the ethical principles set out in our Code of Conduct and comply with applicable laws and regulations and industry guidelines. Employee and customer data are safeguarded through the [Personal Data (Privacy) Ordinance and Residential Properties (Firsthand Sales) Ordinance].

        .reportWrapper-commonpage.pageSetting(:class="{nobgi: !chartAdjust}")
          .content
            p Contact us
            p We welcome feedback on this report and any aspect of our sustainability management approach and performance. Comments or feedback can be sent by email to {{email}} 

        .forcanvas(style="background-color: white",ref="print")

  
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
// eslint-disable-next-line no-unused-vars
import html2canvas from "html2canvas";
// eslint-disable-next-line no-unused-vars
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

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
      chartAdjust: true,
      fileData_HR: "",
      fileTotal_HR: "",
      fileName_HR: "",
      fileData_EM: "",
      fileTotal_EM: "",
      fileName_EM: "",
      fileData_CSR: "",
      fileTotal_CSR: "",
      fileName_CSR: "",
      fileData_CPR: "",
      fileTotal_CPR: "",
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
    async testToPdf() {
      const opt = {
        margin: [0, 0],
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
      };
      this.$nextTick(() => {});
      var x = document.querySelectorAll(".pageSetting");

      const doc = new jsPDF(opt.jsPDF);
      const pageSize = jsPDF.getPageSize(opt.jsPDF);
      console.log(pageSize);
      for (let i = 0; i < x.length; i++) {
        const page = x[i];
        const pageImage = await html2pdf()
          .from(page)
          .set({
            pagebreak: {
              mode: "avoid-all",
            },
          })
          .set(opt)
          .outputImg();
        if (i != 0) {
          doc.addPage();
        }
        doc.addImage(
          pageImage.src,
          "jpeg",
          opt.margin[0],
          opt.margin[1],
          page.clientWidth,
          page.clientHeight
        );
      }
      // This can be whatever output you want. I prefer blob.
      const pdf = doc.output("blob");
      doc.save("a4.pdf");

      return pdf;
    },
    toPdf() {
      var x = document.querySelectorAll(".pageSetting");
      this.chartAdjust = false;
      var vm = this;

      this.$nextTick(() => {
        // var index = 0;
        x.forEach(async (x, index, array) => {
          await html2canvas(x)
            .then((canvas) => {
              var tg = document.querySelector(".forcanvas");
              tg.appendChild(canvas);
              if (array.length == index + 1) {
                this.mixins_toPdf(this.$refs.print, "output");
              }
            })
            .then(() => {
              console.log("finished" + index);
              if (index == array.length - 1) {
                vm.chartAdjust = true;
              }
            });
        });
      });

      // this.$nextTick(() => {
      //   console.log(this.$refs.printD.clientHeight);
      //   this.mixins_toPdf(this.$refs.printD, "output");
      // });
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
              // vm.fileData_HR.questions[val].q.forEach((val, index, array) => {
              //   if (index > 0) {
              //     array[index].type = "textview";
              //   }
              // });
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
.contents {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-top: 10px;
  .content-item {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-item-sub {
    font-weight: normal;

    margin-left: 10px;
  }
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
  position: relative;
  .pdf {
    width: auto;
    position: relative;
    .pageborder {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .pageSetting {
    background-color: #fff;
    width: 805px;
    min-height: 1100px;
    padding: 40px;
    box-sizing: border-box;
    display: block;
    position: relative;
    background-image: linear-gradient(rgb(255, 26, 26) 3px, transparent 0px);
    background-size: 2px 1118px;
    background-position: -2px -2px;
  }
  .nobgi {
    background-image: none;
    border: none;
  }
  &-cover {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 605px;
    height: 1100px;
  }
  &-commonpage {
  }
}
.forcanvas {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 805px;
  margin: 0;
}
</style>

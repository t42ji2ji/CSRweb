import html2pdf from "html2pdf.js";
import {
  mapState
} from 'vuex';

const mixins = {
  computed: {
    ...mapState({
      InputTitle: "InputTitle",
      nowForm: "nowForm",
      userData: "userData",
      UploadData: "UploadData",
      blackBg: "blackBg",
      uploadVisible: "uploadVisible"
    })
  },
  methods: {
    async mixins_toPdf(element, fileName) {
      this.changeUploadVisible();
      await html2pdf()
        .set({
          margin: 0,
          filename: `${fileName}.pdf`,
          pagebreak: {
            after: 'canvas'
          },
          html2canvas: {
            scale: 1,
            useCORS: true,
            letterRendering: true
          },

        })
        .from(element)
        .save();
      console.log('Save');
      var tg = document.querySelectorAll(".forcanvas > canvas");
      tg.forEach((value) => {
        element.removeChild(value);
      });
      console.log(element.innertHTML);
      console.log(element);
      this.changeUploadVisible();
    },
  },
};

export default mixins;
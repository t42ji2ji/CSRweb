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
        })
        .from(element)
        .save();
      console.log('Save');
      element.innertHTML = '';
      console.log(element.innertHTML);
      this.changeUploadVisible();
    },
  },
};

export default mixins;
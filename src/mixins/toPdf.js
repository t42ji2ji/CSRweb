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
          margin: 2,
          filename: `${fileName}.pdf`,
          pagebreak: {
            mode: "avoid-all"
          }
        })
        .from(element)
        .save();
      console.log('Save');
      this.changeUploadVisible();

    },
  },
};

export default mixins;
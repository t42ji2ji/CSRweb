const excelData = {
  fileConfig: {
    name: 'Cum Ser'
  },
  questions: [{
      q: [{
          type: "title",
          data: [
            ['Satisfaction rate', '2', 'bold'],
            ['%', '2', 'bold'],
          ]
        }, {
          type: "input",
          data: [
            ['Entertainment', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "input",
          data: [
            ['Entertainment', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Lodging', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['F & B', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "dash",
          data: []
        },
      ],
      s: []
    },
    {
      q: [{
          type: "title",
          data: [
            ['Hotline', '2', 'bold'],
            ['No. of calls', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Disputes', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Maintainance request', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Inquiry', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "dash",
          data: []
        },
      ],
      s: []
    },
    {
      q: [{
          type: "title",
          data: [
            ['Social media', '2', 'bold'],
            ['times', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Comments and feedbacks', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "dash",
          data: []
        },
      ],
      s: []
    },
    {
      q: [{
          type: "title",
          data: [
            ['Product/service accreditation', '2', 'bold'],
          ]
        },
        {
          type: "text",
          data: [
            ['2014-present', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "text",
          data: [
            ['2018', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },

        {
          type: "dash",
          data: []
        },
      ],
      s: []
    },
    {
      q: [{
          type: "title",
          data: [
            ['Laws/regulations/industry guidelines complied', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['Residential Properties (Firsthand Sales) Ordinance', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['Personal Data (Privacy) Ordinance', '2', 'bold'],
          ]
        },
        {
          type: "dash",
          data: []
        },
      ],
      s: []
    },
  ]
};

var value = {
  "Cum Ser01": ["8"],
  "Cum Ser02": ["8"],
  "Cum Ser03": ["8"],
  "Cum Ser04": ["8"],
  "Cum Ser11": ["8"],
  "Cum Ser12": ["8"],
  "Cum Ser13": ["8"],
  "Cum Ser21": ["8"],
  "Cum Ser31": ["8"],
  "Cum Ser32": ["8"]
}

const getUploadJson = function (data) {
  var status = true;
  for (var key in value) {
    if (data.hasOwnProperty(key)) {
      console.log(key + " -> " + data[key]);
      if (data[key].length != value[key].length) {
        status = false;
        return {
          status,
          uploadExcel: {},
          msg: 'some empty'
        };
      }
      for (var x = 0; x < data[key].length; x++) {
        if (data[key][x] == "") {
          status = false;
          return {
            status,
            uploadExcel: {},
            msg: 'some empty'
          };
        }
      }
    } else {
      status = false;
      return {
        status,
        uploadExcel: {},
        msg: 'some empty'
      };
    }
  }
  var uploadExcel = {
    fileConfig: {
      name: 'Cum Ser'
    },
    questions: [{
        q: [{
            type: "title",
            data: [
              ['Satisfaction rate', '2', 'bold'],
              ['%', '2', 'bold'],
            ]
          }, {
            type: "normal",
            data: [
              ['Entertainment', '2', 'bold'],
              [data['Cum Ser01'][0], '2', 'normal'],
            ]
          }, {
            type: "normal",
            data: [
              ['Entertainment', '2', 'bold'],
              [data['Cum Ser02'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Lodging', '2', 'bold'],
              [data['Cum Ser03'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['F & B', '2', 'bold'],
              [data['Cum Ser04'][0], '2', 'normal'],
            ]
          }, {
            type: "dash",
            data: []
          },
        ],
        s: []
      },
      {
        q: [{
            type: "title",
            data: [
              ['Hotline', '2', 'bold'],
              ['No. of calls', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Disputes', '2', 'bold'],
              [data['Cum Ser11'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Maintainance request', '2', 'bold'],
              [data['Cum Ser12'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Inquiry', '2', 'bold'],
              [data['Cum Ser13'][0], '2', 'normal'],
            ]
          },
          {
            type: "dash",
            data: []
          },
        ],
        s: []
      },
      {
        q: [{
            type: "title",
            data: [
              ['Social media', '2', 'bold'],
              ['times', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Comments and feedbacks', '2', 'bold'],
              [data['Cum Ser21'][0], '2', 'normal'],
            ]
          }, {
            type: "dash",
            data: []
          },
        ],
        s: []
      },
      {
        q: [{
            type: "title",
            data: [
              ['Product/service accreditation', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['2014-present', '2', 'bold'],
              [data['Cum Ser31'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['2018', '2', 'bold'],
              [data['Cum Ser32'][0], '2', 'normal'],
            ]
          },

          {
            type: "dash",
            data: []
          },
        ],
        s: []
      },
      {
        q: [{
            type: "title",
            data: [
              ['Laws/regulations/industry guidelines complied', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['Residential Properties (Firsthand Sales) Ordinance', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['Personal Data (Privacy) Ordinance', '2', 'bold'],
            ]
          },
          {
            type: "dash",
            data: []
          },
        ],
        s: []
      },
    ]
  };
  return {
    status,
    uploadExcel
  };
}

module.exports.excelData = excelData;
module.exports.getUploadJson = getUploadJson;
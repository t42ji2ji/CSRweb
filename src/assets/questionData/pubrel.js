const excelData = {
  fileConfig: {
    name: 'Pubrel'
  },
  questions: [{
      q: [{
          type: "title",
          data: [
            ['Donations', '2', 'bold'],
            ['in \'000', '2', 'bold'],
          ]
        }, {
          type: "input",
          data: [
            ['Accident & emergency relief funds', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "input",
          data: [
            ['Low income families', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Education', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Children & youth development', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['The elderly', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Animal protection', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Social rehabilitation', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Responsible gaming', '2', 'bold'],
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
            ['Community service', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Participants (headcount)', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Personal time', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Office hours', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['No. of activities', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['No. of beneficiaries', '2', 'bold'],
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
            ['Major recognition, award and charters', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['Award', '2', 'bold'],
            ['Issuing bodies', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['2nd F&B Occupational Safety and Health Award Program ', '2 ', 'bold '],
            ['Macau Labour Affairs\nBureau', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['Award for implementing paid paternity leave for male employees', '2', 'bold'],
            ['The Women’s General Association of Macau', '2', 'bold'],
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
            ['Partners and collaborators', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['Social Welfare Department', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['Local community organisations', '2', 'bold'],
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
            ['Community Services provided', '2', 'bold'],
          ]
        },
        {
          type: "",
          data: [
            ['Knit for Charity', '2', 'bold'],
            ['In 2014, we started “Knit for Charity”, an initiative intended to be much more than knitting warm clothing and accessories for the elderly. “Knit for Charity” involves our employees learning how to knit, knitting different items, and presenting the items to the elderly as an expression of care and affection during our visits. This year, we inspired more than 30 employees to work together to knit pouches which we gave to the elderly during our visits and other volunteering activities.', '2', 'normal'],
          ]
        },
        {
          type: "",
          data: [
            ['Career Exploration Workshops for Students with Special Needs', '2', 'bold'],
            ['We arranged for students with learning disabilities from Escola Luso-Chinesa Técnico-Profissional to attend a floral arrangement training and observe kitchen operations at Macau Tower to help them explore career options.', '2', 'normal'],

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
  "Pubrel01": ["9"],
  "Pubrel02": ["9"],
  "Pubrel03": ["9"],
  "Pubrel04": ["9"],
  "Pubrel05": ["9"],
  "Pubrel06": ["9"],
  "Pubrel07": ["9"],
  "Pubrel08": ["9"],
  "Pubrel11": ["9"],
  "Pubrel12": ["9"],
  "Pubrel13": ["9"],
  "Pubrel14": ["9"],
  "Pubrel15": ["9"]
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
      name: 'Pubrel'
    },
    questions: [{
        q: [{
            type: "title",
            data: [
              ['Donations', '2', 'bold'],
              ['in \'000', '2', 'bold'],
            ]
          }, {
            type: "normal",
            data: [
              ['Accident & emergency relief funds', '2', 'bold'],
              [data.Pubrel01[0], '2', 'normal'],
            ]
          }, {
            type: "normal",
            data: [
              ['Low income families', '2', 'bold'],
              [data.Pubrel02[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Education', '2', 'bold'],
              [data.Pubrel03[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Children & youth development', '2', 'bold'],
              [data.Pubrel04[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['The elderly', '2', 'bold'],
              [data.Pubrel05[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Animal protection', '2', 'bold'],
              [data.Pubrel06[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Social rehabilitation', '2', 'bold'],
              [data.Pubrel07[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Responsible gaming', '2', 'bold'],
              [data.Pubrel08[0], '2', 'normal'],
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
              ['Community service', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Participants (headcount)', '2', 'bold'],
              [data.Pubrel11[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Personal time', '2', 'bold'],
              [data.Pubrel12[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Office hours', '2', 'bold'],
              [data.Pubrel13[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['No. of activities', '2', 'bold'],
              [data.Pubrel14[0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['No. of beneficiaries', '2', 'bold'],
              [data.Pubrel15[0], '2', 'normal'],
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
              ['Major recognition, award and charters', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['Award', '2', 'bold'],
              ['Issuing bodies', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['2nd F&B Occupational Safety and Health Award Program ', '2 ', 'bold '],
              ['Macau Labour Affairs\nBureau', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['Award for implementing paid paternity leave for male employees', '2', 'bold'],
              ['The Women’s General Association of Macau', '2', 'bold'],
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
              ['Partners and collaborators', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['Social Welfare Department', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['Local community organisations', '2', 'bold'],
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
              ['Community Services provided', '2', 'bold'],
            ]
          },
          {
            type: "",
            data: [
              ['Knit for Charity', '2', 'bold'],
              ['In 2014, we started “Knit for Charity”, an initiative intended to be much more than knitting warm clothing and accessories for the elderly. “Knit for Charity” involves our employees learning how to knit, knitting different items, and presenting the items to the elderly as an expression of care and affection during our visits. This year, we inspired more than 30 employees to work together to knit pouches which we gave to the elderly during our visits and other volunteering activities.', '2', 'normal'],
            ]
          },
          {
            type: "",
            data: [
              ['Career Exploration Workshops for Students with Special Needs', '2', 'bold'],
              ['We arranged for students with learning disabilities from Escola Luso-Chinesa Técnico-Profissional to attend a floral arrangement training and observe kitchen operations at Macau Tower to help them explore career options.', '2', 'normal'],

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

module.exports.excelData = excelData;
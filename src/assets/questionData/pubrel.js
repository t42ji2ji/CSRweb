const excelData = {
  fileConfig: {
    name: 'Community & Public Relations'
  },
  questions: [{
      q: [{
          type: "title",
          data: [
            ['Donations', '2', 'bold'],
            ['MOP’000', '2', 'bold'],
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
            ['Personal time(hours)', '2', 'bold'],
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
          type: "text",
          data: [
            ['Award', '2', 'bold'],
            ['', '2', 'bold'],
          ]
        },
        {
          type: "text",
          data: [
            ['2nd F&B Occupational Safety and Health Award Program ', '2 ', 'bold '],
            ['', '2', 'bold'],
          ]
        },
        {
          type: "text",
          data: [
            ['Award for implementing paid paternity leave for male employees', '2', 'bold'],
            ['', '2', 'bold'],
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
          type: "text",
          data: [
            ['Social Welfare Department', '2', 'bold'],
            ['', '2', 'bold'],
          ]
        },
        {
          type: "text",
          data: [
            ['Local community organisations', '2', 'bold'],
            ['', '2', 'bold'],
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
          type: "text",
          data: [
            ['Knit for Charity', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "text",
          data: [
            ['Career Exploration Workshops for Students with Special Needs', '2', 'bold'],
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
  ]
};

var value = {
  "Pubrel01": ["9"],
  "Pubrel02": ["9"],
  "Pubrel03": ["9"],
  "Pubrel04": ["9"],
  "Pubrel05": ["99"],
  "Pubrel06": ["9"],
  "Pubrel07": ["9"],
  "Pubrel08": ["9"],
  "Pubrel11": ["9"],
  "Pubrel12": ["9"],
  "Pubrel13": ["9"],
  "Pubrel14": ["9"],
  "Pubrel15": ["9"],
  "Pubrel21": ["9"],
  "Pubrel22": ["9"],
  "Pubrel23": ["9"],
  "Pubrel31": ["9"],
  "Pubrel32": ["9"],
  "Pubrel41": ["9"],
  "Pubrel42": ["9"]
};


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
          msg: 'Warning: Incomplete Information '
        };
      }
      for (var x = 0; x < data[key].length; x++) {
        if (data[key][x] == "") {
          status = false;

          return {
            status,
            uploadExcel: {},
            msg: 'Warning: Incomplete Information '
          };
        }
      }
    } else {
      status = false;
      return {
        status,
        uploadExcel: {},
        msg: 'Warning: Incomplete Information '
      };
    }
  }

  var uploadExcel = {
    fileConfig: {
      name: 'Community & Public Relations'
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
              ['Personal time(hours)', '2', 'bold'],
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
            type: "textview",
            data: [
              ['Award', '2', 'bold'],
              [data.Pubrel21[0], '2', 'bold'],
            ]
          },
          {
            type: "textview",
            data: [
              ['2nd F&B Occupational Safety and Health Award Program ', '2 ', 'bold '],
              [data.Pubrel22[0], '2', 'bold'],
            ]
          },
          {
            type: "textview",
            data: [
              ['Award for implementing paid paternity leave for male employees', '2', 'bold'],
              [data.Pubrel23[0], '2', 'bold'],
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
            type: "textview",
            data: [
              ['Social Welfare Department', '2', 'bold'],
              [data.Pubrel31[0], '2', 'bold'],
            ]
          },
          {
            type: "textview",
            data: [
              ['Local community organisations', '2', 'bold'],
              [data.Pubrel32[0], '2', 'bold'],
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
            type: "textview",
            data: [
              ['Knit for Charity', '2', 'bold'],
              [data.Pubrel41[0], '2', 'normal'],
            ]
          },
          {
            type: "textview",
            data: [
              ['Career Exploration Workshops for Students with Special Needs', '2', 'bold'],
              [data.Pubrel42[0], '2', 'normal'],

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
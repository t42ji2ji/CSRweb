const excelData = {
  fileConfig: {
    name: 'Customer Services & Relationship'
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
            ['Front Office', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "input",
          data: [
            ['Housekeeping', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Retail Shops', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Food & Beverages', '2', 'bold'],
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
            ['Times', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Communications', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Website……Number of visitors per year', '2', 'bold'],
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
            ['Meetings with customers', '2', 'bold'],
            ['Number', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['In-person meetings', '2', 'bold'],
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
          type: "text",
          data: [
            ['Residential Properties (Firsthand Sales) Ordinance', '2', 'bold'],
            ['', '2', 'bold'],
          ]
        },
        {
          type: "text",
          data: [
            ['Personal Data (Privacy) Ordinance', '2', 'bold'],
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
  ]
};

var value = {
  "Cum Ser01": ["99"],
  "Cum Ser02": ["9"],
  "Cum Ser03": ["9"],
  "Cum Ser04": ["9"],
  "Cum Ser11": ["9"],
  "Cum Ser12": ["9"],
  "Cum Ser13": ["99"],
  "Cum Ser21": ["9"],
  "Cum Ser31": ["8"],
  "Cum Ser41": ["8"],
  "Cum Ser42": ["8"],
  "Cum Ser51": ["8"],
  "Cum Ser52": ["8"]
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
              ['Meetings with customers', '2', 'bold'],
              ['', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['-', '2', 'bold'],
              [data['Cum Ser31'][0], '2', 'normal'],
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
            type: "textview",
            data: [
              ['2014-present', '2', 'bold'],
              [data['Cum Ser41'][0], '2', 'normal'],
            ]
          },
          {
            type: "textview",
            data: [
              ['2018', '2', 'bold'],
              [data['Cum Ser42'][0], '2', 'normal'],
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
            type: "textview",
            data: [
              ['Residential Properties (Firsthand Sales) Ordinance', '2', 'bold'],
              [data['Cum Ser51'][0], '2', 'bold'],
            ]
          },
          {
            type: "textview",
            data: [
              ['Personal Data (Privacy) Ordinance', '2', 'bold'],
              [data['Cum Ser52'][0], '2', 'bold'],
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
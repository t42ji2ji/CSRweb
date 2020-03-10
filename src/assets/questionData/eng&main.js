const excelData = {
  fileConfig: {
    name: 'Engineering & Maintenance'
  },
  questions: [{
      q: [{
          type: "title",
          data: [
            ['Engergy consumption', '2', 'bold'],
            ['Mwh', '2', 'bold'],
          ]
        }, {
          type: "input",
          data: [
            ['Stationary', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "input",
          data: [
            ['Mobile', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Electricity', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "input",
        data: [
          ['Stationary', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
    },
    {
      q: [{
          type: "title",
          data: [
            ['Water consumed', '2', 'bold'],
            ['m3', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Water consumed', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "input",
        data: [
          ['Water consumed', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      },
    },
    {
      q: [{
          type: "title",
          data: [
            ['Packaging material', '2', 'bold'],
            ['Tonness', '1', 'bold'],
            ['Units', '1', 'bold']
          ]
        },
        {
          type: "input",
          data: [
            ['Material used', '2', 'bold'],
            ['', '1', 'normal'],
            ['', '1', 'normal']
          ]
        }, {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "input",
        data: [
          ['Material used', '2', 'bold'],
          ['', '1', 'normal'],
          ['', '1', 'normal']
        ]
      }
    },
    {
      q: [{
          type: "title",
          data: [
            ['Gross Floor Area', '2', 'bold'],
            ['m2', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Hotel', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Casino', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "input",
        data: [
          ['Hotel', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      },
    },
    {
      q: [{
          type: "title",
          data: [
            ['Greenhouse gas emissions(CO2)', '2', 'bold'],
            ['Tonnes', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Direct emissions from owned or controlled sources', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Indirect emission from the generation of purchased energy', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Others', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        }, {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "input",
        data: [
          ['Direct emissions from owned or controlled sources', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
    },
    {
      q: [{
          type: "title",
          data: [
            ['Wastage', '2', 'bold'],
            ['in Tonnes/Litres/Pieces', '2', 'bold'],
          ]
        },
        {
          type: "input",
          data: [
            ['Paper', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Plastic', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Metal', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Glass bottles', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Aluminum cans', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Waste oil', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Old books', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Toner cartridges', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "input",
          data: [
            ['Used furniture and electronic equipment', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "input",
        data: [
          ['Paper', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
    },
    {
      q: [{
          type: "title",
          data: [
            ['Other environmental awareness activities', '2', 'bold'],
          ]
        },
        {
          type: "text",
          data: [
            ['1. Creating a Renewable Future - Installation of Solar Panel', '2', 'bold'],
            ['', '2', 'bold'],

          ]
        },
        {
          type: "text",
          data: [
            ['2. Waste Management', '2', 'bold'],
            ['', '2', 'bold'],

          ]
        },
        {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "text",
        data: [
          ['1. Creating a Renewable Future - Installation of Solar Panel', '2', 'bold'],
          ['', '2', 'bold'],

        ]
      },
    },
    {
      q: [{
          type: "title",
          data: [
            ['Occupational Safety and Health ', '2', 'bold'],
          ]
        },
        {
          type: "text",
          data: [
            ['ans.', '2', 'bold'],
            ['', '2', 'normal'],
          ]
        },
        {
          type: "dash",
          data: []
        },
      ],
      s: {
        type: "text",
        data: [
          ['ans.', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
    },
  ]
};

var value = {
  "Eng & Main01": ["1"],
  "Eng & Main02": ["1"],
  "Eng & Main03": ["1"],
  "Eng & Main11": ["1"],
  "Eng & Main21": ["1", "1"],
  "Eng & Main31": ["1"],
  "Eng & Main32": ["1"],
  "Eng & Main41": ["1"],
  "Eng & Main42": ["1"],
  "Eng & Main43": ["1"],
  "Eng & Main51": ["1"],
  "Eng & Main52": ["1"],
  "Eng & Main53": ["1"],
  "Eng & Main54": ["1"],
  "Eng & Main55": ["1"],
  "Eng & Main56": ["1"],
  "Eng & Main57": ["1"],
  "Eng & Main58": ["1"],
  "Eng & Main59": ["1"],
  "Eng & Main61": ["1"],
  "Eng & Main62": ["1"],
  "Eng & Main71": ["1"]
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
      name: 'Engineering & Maintenance'
    },
    questions: [{
        q: [{
            type: "title",
            data: [
              ['Engergy consumption', '2', 'bold'],
              ['MWH', '2', 'bold'],
            ]
          }, {
            type: "normal",
            data: [
              ['Stationary', '2', 'bold'],
              [data['Eng & Main01'][0], '2', 'normal'],
            ]
          }, {
            type: "normal",
            data: [
              ['Mobile', '2', 'bold'],
              [data['Eng & Main02'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Electricity', '2', 'bold'],
              [data['Eng & Main03'][0], '2', 'normal'],
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
              ['-', '2', 'bold'],
              ['m3', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Water consumed', '2', 'bold'],
              [data['Eng & Main11'][0], '2', 'normal'],
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
              ['-', '2', 'bold'],
              ['Tonnes', '1', 'bold'],
              ['Units', '1', 'bold']
            ]
          },
          {
            type: "normal",
            data: [
              ['Packaging material', '2', 'bold'],
              [data['Eng & Main21'][0], '1', 'normal'],
              [data['Eng & Main21'][1], '1', 'normal']
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
              ['GFA', '2', 'bold'],
              ['M2', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Hotel', '2', 'bold'],
              [data['Eng & Main31'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Casino', '2', 'bold'],
              [data['Eng & Main32'][0], '2', 'normal'],
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
              ['Greenhouse gas emissions(CO2)', '2', 'bold'],
              ['in Tonnes', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Direct emissions from owned or controlled sources', '2', 'bold'],
              [data['Eng & Main41'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Indirect emission from the generation of purchased energy', '2', 'bold'],
              [data['Eng & Main42'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Others', '2', 'bold'],
              [data['Eng & Main43'][0], '2', 'normal'],
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
              ['Wastage', '2', 'bold'],
              ['in Tonnes/Litres/Pieces', '2', 'bold'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Paper', '2', 'bold'],
              [data['Eng & Main51'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Plastic', '2', 'bold'],
              [data['Eng & Main52'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Metal', '2', 'bold'],
              [data['Eng & Main53'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Glass bottles', '2', 'bold'],
              [data['Eng & Main54'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Aluminum cans', '2', 'bold'],
              [data['Eng & Main55'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Waste oil', '2', 'bold'],
              [data['Eng & Main56'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Old books', '2', 'bold'],
              [data['Eng & Main57'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Toner cartridges', '2', 'bold'],
              [data['Eng & Main58'][0], '2', 'normal'],
            ]
          },
          {
            type: "normal",
            data: [
              ['Used furniture and electronic equipment', '2', 'bold'],
              [data['Eng & Main59'][0], '2', 'normal'],
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
              ['Other environmental awareness activities', '2', 'bold'],
            ]
          },
          {
            type: "textview",
            data: [
              ['1. Creating a Renewable Future - Installation of Solar Panel', '2', 'bold'],
              [data['Eng & Main61'][0], '2', 'normal'],

            ]
          },
          {
            type: "textview",
            data: [
              ['2. Waste Management', '2', 'bold'],
              [data['Eng & Main62'][0], '2', 'normal'],

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
              ['Occupational Safety and Health ', '2', 'bold'],
            ]
          },
          {
            type: "textview",
            data: [
              ['ans.', '2', 'bold'],
              [data['Eng & Main71'][0], '2', 'normal'],
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
  }
  return {
    status,
    uploadExcel
  };
}

module.exports.excelData = excelData;
module.exports.getUploadJson = getUploadJson;
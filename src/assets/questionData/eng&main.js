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
        },
        {
          type: "add",
          data: [
            ['add', '3', 'bold']
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
          ['Stationary', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
    },
    {
      q: [{
          type: "title",
          data: [
            ['Water Consumption', '2', 'bold'],
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
          type: "add",
          data: [
            ['add', '3', 'bold']
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
        },
        {
          type: "add",
          data: [
            ['add', '3', 'bold']
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
          type: "add",
          data: [
            ['add', '3', 'bold']
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
        },
        {
          type: "add",
          data: [
            ['add', '3', 'bold']
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
          type: "add",
          data: [
            ['add', '3', 'bold']
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
          type: "add",
          data: [
            ['add', '3', 'bold']
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
          type: "add",
          data: [
            ['add', '3', 'bold']
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


module.exports.excelData = excelData;
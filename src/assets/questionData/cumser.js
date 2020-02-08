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

module.exports.excelData = excelData;
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
          type: 'add',
          data: [
            ['add', '2', 'bold']
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
          ['Accident & emergency relief funds', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
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
          type: 'add',
          data: [
            ['add', '2', 'bold']
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
          ['Participants (headcount)', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
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
          type: 'add',
          data: [
            ['add', '2', 'bold']
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
          ['Award', '2', 'bold'],
          ['', '2', 'bold'],
        ]
      }
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
          type: 'add',
          data: [
            ['add', '2', 'bold']
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
          ['Social Welfare Department', '2', 'bold'],
          ['', '2', 'bold'],
        ]
      }
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
          type: 'add',
          data: [
            ['add', '2', 'bold']
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
          ['Knit for Charity', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
    },
  ]
};

module.exports.excelData = excelData;
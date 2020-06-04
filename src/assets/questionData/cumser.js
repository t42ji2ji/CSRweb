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
          ['Front Office', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
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
          ['Disputes', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
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
          ['Communications', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
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
          ['In-person meetings', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
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
          ['2014-present', '2', 'bold'],
          ['', '2', 'normal'],
        ]
      }
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
          ['Residential Properties (Firsthand Sales) Ordinance', '2', 'bold'],
          ['', '2', 'bold'],
        ]
      }
    },
    {
      q: [{
          type: "title",
          data: [
            ['Facilities', '2', 'bold'],
            ['Y/N/NA', '2', 'bold'],
          ]
        },
        {
          type: "choose2",
          data: [
            ['Disabled lifts/ramps', '2', 'bold'],
            ['Y', '2', 'bold'],
          ]
        },
        {
          type: "choose2",
          data: [
            ['Directional tiles', '2', 'bold'],
            ['Y', '2', 'bold'],
          ]
        },
        {
          type: "choose2",
          data: [
            ['Priority seats for disabled', '2', 'bold'],
            ['Y', '2', 'bold'],
          ]
        },
        {
          type: "choose2",
          data: [
            ['Wheelchair', '2', 'bold'],
            ['Y', '2', 'bold'],
          ]
        },
        {
          type: "choose2",
          data: [
            ['Dedicated room for breastfeeding', '2', 'bold'],
            ['Y', '2', 'bold'],
          ]
        },
        {
          type: "choose2",
          data: [
            ['Disabled-friendly rooms', '2', 'bold'],
            ['Y', '2', 'bold'],
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
        type: "choose2",
        data: [
          ['Disabled lifts/ramps', '2', 'bold'],
          ['Y', '2', 'bold'],
        ]
      },
    },
  ]
};


module.exports.excelData = excelData;
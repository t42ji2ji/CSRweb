/**
 *
 *
 * @param {*} exceldata
 * @returns fineExcelData
 */
const extractData = function (data) {
  var isTitle = true;
  var q = [];
  var excelData = {
    fileConfig: {
      name: ''
    },
    questions: []
  };
  var nextQuestion = false;

  data.forEach((value, index_question) => {
    var q_item = [];

    value.map((value, index, array) => {
      if (index == 0)
        q_item.push([value, '2', 'bold']);
      else {
        q_item.push([value, 2 / (array.length - 1), 'normal']);
      }
    });

    var type = 'normal';
    if (isTitle) {
      type = 'title';
      q_item = q_item.map((value) => {
        return [value[0], value[1], 'bold'];
      });
      isTitle = false;
    } else if (q_item.length == 0 || index_question == data.length - 1) {
      type = 'dash';
      isTitle = true;
      nextQuestion = true;
    }
    q.push({
      type: type,
      data: q_item
    });
    if (nextQuestion) {
      excelData.questions.push({
        q: q,
        s: []
      });
      q = [];
      nextQuestion = false;
    }

  });
  return excelData;
};

// eslint-disable-next-line no-unused-vars
var testdata = [
  ["Staff Head Count", "Male", "Female"],
  ["Directors ", 12, 6],
  ["Managers", 24, 29],
  ["Officer", 52, 68],
  ["Designer", 42, 36],
  ["Coordinator", 86, 78],
  ["Waitress", 102, 159],
  ["Drivers", 41, 6],
  [],
  ["Age"],
  ["<30", 86, 98],
  ["31-40", 176, 287],
  ["41-65", 14, 80],
  [],
  ["Newly hired", 13, 27],
  ["<30", 2, 20],
  ["31-40", 8, 7],
  ["41-65", 3, 0],
  [],
  ["Resigned", 8, 9],
  ["<30", 2, 1],
  ["31-40", 3, 4],
  ["41-65", 3, 4],
  [],
  ["Training hours", 146, 147],
  ["Director", 30, 30],
  ["Manager", 45, 48],
  ["Officer", 71, 69],
  [],
  ["Performace & career development reviews", 238, 173],
  ["Directors ", 3, 2],
  ["Managers", 16, 22],
  ["Officer", 42, 54],
  ["Designer", 36, 28],
  ["Coordinator", 48, 47],
  ["Waitress", 68, 17],
  ["Drivers", 25, 3],
  []
];


/**
 *
 *
 * @param {*} exceldata
 * @returns excel total Array
 */
const calcTotal = function (exceldata, isDone = false) {
  var data = exceldata;
  if (!isDone) {
    data = extractData(exceldata);
  }
  var alltotal = [];
  var totals = [];
  var totals_stack = [];
  var totals_stack_title = [];
  var totals_stack_title_question = [];
  data.questions.forEach((value) => {
    var total_one_question = [];
    var total_one_question_saperate = [];
    var total_one_question_saperate_title = [];

    value.q.forEach((value) => {
      var total_one_q = [];
      value.data.forEach((num, index) => {
        if (index > 0) {
          if (!isNaN(num[0]) && value.type != "title") {
            total_one_q.push(num[0]);
          }
        } else if (value.type != "title") {
          total_one_question_saperate_title.push(num[0]);
        }
      });
      if (total_one_q.length > 0) {
        total_one_question_saperate.push(total_one_q);
        if (total_one_question.length == 0) {
          total_one_question = total_one_q;
        } else {
          total_one_question = total_one_q.map((value, index) => {
            return parseFloat(value) + parseFloat(total_one_question[index]);
          });
        }
      }
    });
    if (value.q[0].type == 'title') {
      totals_stack_title_question.push([
        [value.q[0].data[0][0], '1', 'bold'],
        [total_one_question[0], '1', 'bold'],
        [total_one_question[1], '1', 'bold']
      ]);
    }
    totals_stack.push(total_one_question_saperate);
    totals_stack_title.push(total_one_question_saperate_title);
    totals.push(total_one_question);
  });
  alltotal.push(totals_stack_title);
  alltotal.push(totals_stack);
  alltotal.push(totals);
  alltotal.push(totals_stack_title_question);
  return alltotal;
};
const tt = calcTotal(testdata);

module.exports.extractData = extractData;
module.exports.calcTotal = calcTotal;
module.exports.tt = tt;
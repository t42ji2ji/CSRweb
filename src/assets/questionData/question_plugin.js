const hr_plugin = [6];
const engmain_plugin = [6, 7];
const cumser_plugin = [3, 4, 5, 6];
const pubrel_plugin = [2, 3, 4, 5, 6];

const hr_isYN_plugin = [6];
const engmain_isYN_plugin = [];
const cumser_isYN_plugin = [6];
const pubrel_isYN_plugin = [5];
const hr_label = (index) => {
  var label = [
    ['Male', 'Female'],
    ['Male', 'Female'],
    ['Male', 'Female'],
    ['Male', 'Female'],
    ['Male', 'Female'],
    ['Male', 'Female'],
    ['Male', 'Female'],

  ];
  return label[index];
};
const engmain_label = (index) => {
  var label = [
    ['Mwh'],
    ['m3'],
    ['Tonness', 'Units'],
    ['m2'],
    ['Tonnes'],
    ['in Tonnes/Litres/Pieces'],
    [''],
    ['']
  ];
  return label[index];
};
const cumser_label = (index) => {
  var label = [
    ['%'],
    ['No. of calls'],
    ['Times'],
    [''],
    [''],
    ['Y/N/NA'],
  ];
  return label[index];
};
const pubrel_label = (index) => {
  var label = [
    ['MOP’000'],
    [''],
    [''],
    [''],
    [''],
    ['Y/N/NA'],
    ['Details'],
  ];
  return label[index];
};


module.exports.hr_plugin = hr_plugin;
module.exports.cumser_plugin = cumser_plugin;
module.exports.pubrel_plugin = pubrel_plugin;
module.exports.engmain_plugin = engmain_plugin;

module.exports.hr_isYN_plugin = hr_isYN_plugin;
module.exports.cumser_isYN_plugin = cumser_isYN_plugin;
module.exports.pubrel_isYN_plugin = pubrel_isYN_plugin;
module.exports.engmain_isYN_plugin = engmain_isYN_plugin;

module.exports.hr_label = hr_label;
module.exports.cumser_label = cumser_label;
module.exports.pubrel_label = pubrel_label;
module.exports.engmain_label = engmain_label;
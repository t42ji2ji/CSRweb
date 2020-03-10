const hr_plugin = [''];
const engmain_plugin = [6, 7];
const cumser_plugin = [4, 5];
const pubrel_plugin = [2, 3, 4];
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
    ['']
  ];
  return label[index];
};
const pubrel_label = (index) => {
  var label = [
    ['MOP’000'],
    [''],
    [''],
    [''],
    ['']
  ];
  return label[index];
};


module.exports.hr_plugin = hr_plugin;
module.exports.cumser_plugin = cumser_plugin;
module.exports.pubrel_plugin = pubrel_plugin;
module.exports.engmain_plugin = engmain_plugin;

module.exports.hr_label = hr_label;
module.exports.cumser_label = cumser_label;
module.exports.pubrel_label = pubrel_label;
module.exports.engmain_label = engmain_label;
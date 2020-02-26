const hr_plugin = [''];
const cumser_plugin = [4, 5];
const pubrel_plugin = [2, 3, 4];
const engmain_plugin = [6, 7];
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
const cumser_label = (index) => {
  var label = [
    ['%'],
    ['No. of calls'],
    ['times'],
    [''],
    ['']
  ];
  return label[index];
};
const pubrel_label = (index) => {
  var label = [
    ['in \'000'],
    [''],
    [''],
    [''],
    ['']
  ];
  return label[index];
};
const engmain_label = (index) => {
  var label = [
    ['MWH'],
    ['m3'],
    ['tonnes', 'units'],
    ['M2'],
    ['in Tonnes'],
    ['in Tonnes/Litres/Pieces'],
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
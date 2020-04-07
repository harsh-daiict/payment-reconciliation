var dateformat = require('dateformat');
var dateUtil = {};

dateUtil.format =  function (date, format) {
  return dateformat(date, format)
};

dateUtil.stringToDate = function(str) {
  var datePart = str.toString().split(" ")[0].trim();
  return new Date(datePart);
}
module.exports = dateUtil;

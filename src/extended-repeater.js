const { NotImplementedError } = require('../extensions/index.js');


function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition === undefined ? '' : String(options.addition);
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let additionStr = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let result = (str + additionStr + separator).repeat(repeatTimes - 1) + str + additionStr;

  return result;
}

module.exports = {
  repeater
};
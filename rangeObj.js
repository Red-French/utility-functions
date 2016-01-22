module.exports = function (num) {
  var range = require('./range');  // required file is where range is calc'd and returned
  if (num) {  // if true (num exists)
    var obj = range(num).reduce(function (all, num) {  // perform function in reqd module
                                                       // and perform reduce method
    all[num] = num;  // set index and move item(num) into array
    return all;  // reduce requires something be returned
  },{})  // second parameter of the reduce method is an object (the starting point)
  }
  else {  // else if num === false
    return {};  // return emtpy object
  }
  return obj;  // return oject
};


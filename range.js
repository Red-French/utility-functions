//module.exports = function (length) {
  //var array = [];
  //for (i = 0; i < length; i++) {
    //array.push(i);
  //}
  //return array;
//};


module.exports = function (start, stop) {
  var range = [];
console.log("start =", start, "stop =", stop);
console.log("!stop = ", !stop);
  if (!stop) {  // if true (if stop is 'undefined')
    stop = start; // number passed in to 'start' var is actually where we want to stop, so move to 'stop' var
    start = 0; // reset 'start' var to zero for proper place to begin loop below
  }

  for (var i = 0; start < stop; start++, i++) {
    range[i] = start;
//    console.log(i, start, stop);
  }

  return range;
};




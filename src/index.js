
exports.min = function min (array) {
  if(!array|| array[0]==undefined ){
    return 0;
  }
  array.sort(function(a, b){
    if(a < b) { return -1; }
if(a > b) { return 1; }
return 0;
})
return array[0];
}

exports.max = function max (array) {
 if(!array|| array[0]==undefined ){
   return 0;
 }
  array.sort(function(a, b){
    if(a < b) { return -1; }
if(a > b) { return 1; }
return 0;
  });
    return array[array.length-1];
}

exports.avg = function avg (array) {
  if(!array|| array[0]==undefined ){
    return 0;
  }
  let sum = 0;
  array.forEach(element => {
    sum+=element;
  });
  return sum/array.length;
}

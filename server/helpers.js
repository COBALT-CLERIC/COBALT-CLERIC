var helpers = {};

helpers.averageScore = function(arr){
  total = 0
  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
  };
  return avg = total/arr.length
}



module.exports = helpers;
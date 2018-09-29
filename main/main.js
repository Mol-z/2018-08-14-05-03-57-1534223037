module.exports = function main(str) {
  // Write your code here
  var sum = 0;
  for(var i = 0; i < str.length; i++)
     sum += parseInt(str[i]);
  return sum;
};

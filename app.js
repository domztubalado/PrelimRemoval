const utils = require('./util.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade:',function (answer)  {
  var Grade = parseInt(answer);
  utils.processTheGrade(Grade);
  rl.close();
});
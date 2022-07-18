const { createTableFile } = require('./components/multiply');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

createTableFile(argv.n, argv.l, argv.m)
  .then((fileName) => console.log(colors.rainbow(fileName), ' created'.green))
  .catch((err) => console.log(err));

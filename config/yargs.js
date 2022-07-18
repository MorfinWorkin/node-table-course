const argv = require('yargs')
  .options({
    n: {
      alias: 'num',
      type: 'number',
      demandOption: true,
      desc: 'Inputs the number to multiply',
    },
    l: {
      alias: 'list',
      type: 'boolean',
      default: 'false',
      desc: 'Outputs the table in console',
    },
    m: {
      alias: 'max',
      type: 'number',
      desc: 'Limits the table lenght to an specific number',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.n || argv.m)) {
      throw new Error('num value must be a number');
    }
    return true;
  }).argv;

module.exports = argv;

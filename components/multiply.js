const fs = require('fs');
const colors = require('colors');

const createTableFile = async (num = 5, list = false, maxLimit = 10) => {
  try {
    let fileName = `table-${num}.txt`;
    let output = '';
    let colouredConsole = '';

    for (let i = 1; i <= maxLimit; i++) {
      output += `${num} X ${i} = ${num * i}\n`;
      colouredConsole += `${colors.red(num)} X ${colors.blue(
        i,
      )} = ${colors.green(num * i)}\n`;
    }

    if (list == true) {
      console.log('---------------------'.blue);
      console.log('Number '.italic, colors.green(num), ' table'.italic);
      console.log('---------------------'.blue);
      console.log(colouredConsole);
    }

    fs.writeFileSync(`./outputs/table-${num}.txt`, output);

    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTableFile,
};

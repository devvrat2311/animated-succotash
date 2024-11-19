const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", 'utf-8');
    const second = await readFile("../content/second.txt", 'utf-8');
    await writeFile(
      "../content/result-mind-grande.txt", 
      `this is awesome: ${first} ${second}\n`,
      {flag: 'a'}
    )
    console.log(first, second);
  } catch(error) {
    console.log(error);
  }
}

start();
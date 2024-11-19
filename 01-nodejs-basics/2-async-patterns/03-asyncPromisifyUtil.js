const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("../content/first.txt", 'utf-8');
    const second = await readFilePromise("../content/second.txt", 'utf-8');
    await writeFilePromise(
      "../content/result-mind-grande.txt", 
      `this is awesome: ${first} ${second}`
    )
    console.log(first, second);
  } catch(error) {
    console.log(error);
  }
}

start();

// const getText = (path) => {
//   return new Promise((reject, resolve) => {
//     readFile(path, 'utf-8',(err, data) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     }) 
//   })
// }

// getText('../content/second.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));



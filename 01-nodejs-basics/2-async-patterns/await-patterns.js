const { readFile, writeFile, read } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try{
  const first = await readFile('./content/first.txt', 'utf8');
  const second= await readFile('./content/second.txt', 'utf8');
  await writeFile(
    './content/result-mind-grenade.txt',
    `THIS IS AWESOME : ${first} ${second}`,
    { flag:'a'}
    )
  console.log(first,second);
  } catch (error) {
    console.log(error);
  }
}

start();
console.log('starting the final read');
const third = readFile('./content/result-mind-grenade.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
  }
  console.log(result);
});

// getText('./content/first.txt')
//   .then((result)=> console.log(result))
//   .catch((err) => console.log(err));
// getText('./content/second.txt')
//   .then((result)=> console.log(result))
//   .catch((err) => console.log(err));

// const getText = (path) =>{
//   console.log('started getText call');
//   return new Promise((resolve, reject)=>{
//     readFile(path, 'utf8', (err,data)=>{
//       if(err){
//         reject(err);
//       }
//       else{
//         resolve(data);
//       }
//     })
//   })
// }

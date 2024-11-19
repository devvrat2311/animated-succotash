const { readFileSync, writeFileSync, write, writeFile} = require('fs');


console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
console.log('done first task');
const second= readFileSync('./content/second.txt', 'utf-8');
console.log('done second task');
const text = readFileSync('./content/subfolder/text.txt','utf-8');

console.log(first,second,text);

console.log("startwriting");
writeFileSync(
'./content/result.txt',
`Here is the result :  ${first}, ${second}`,
{ flag: 'a'}
);
console.log("endwriting");

console.log('done with this task');
console.log('starting the next one');


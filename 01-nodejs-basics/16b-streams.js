const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
  console.log(`Recieved ${result.length} bytes of data`);
});

stream.on('end', ()=> {
  console.log('There will be no more data.');
})

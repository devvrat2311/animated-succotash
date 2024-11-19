const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
  console.log(`data recieved of user ${name} with id: ${id}`);
});
customEmitter.on('response',()=>{
  console.log(`Some other logic`);
});

customEmitter.emit('response','Deba',23);
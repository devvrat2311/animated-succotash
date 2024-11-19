const http = require('http');

const server = http.createServer();

server.on('request', (req,res)=>{
  console.log('requested something');
  res.end('Welcome');
});

server.listen(5000,()=>{
  console.log('Listening on port:5000');
});
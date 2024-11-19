const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.write('<h1>Who</h1>');
  }
  if(req.url === '/about'){
    //  BLOCKING CODE!!!
    for(let i = 0; i < 1000; i++) {
      for(let j = 0; j < 1000; j++){
        console.log(`${i} ${j}`);
      }
    }
    res.write('<h2>About Page</h2>');
  }
  res.end(`
    <h1>This is the end of the Page</h1>
  `);
  
})

server.listen(5000, () => {
  console.log(`Server is listening on port:5000 . . .`);
})
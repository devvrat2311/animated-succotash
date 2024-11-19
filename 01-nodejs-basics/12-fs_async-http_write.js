const http = require('http')
const { readFile, read } = require('fs');

readFile('./content/first.txt','utf8',(err, result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result;
  const server = http.createServer((req,res)=>{
    res.write(`Hello and : ${first}`)
    res.end()
  })

  server.listen(5000)
})
// const server = http.createServer((req,res)=>{
//   if(req.url === '/'){
//     res.write('Welcome to our home page');
//   }
//   if(req.url === '/about'){
//     res.write('Here is our short history');
//   }
//   res.end('yokatta');
// })



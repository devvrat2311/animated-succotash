// const http = require('http');
const http = require('http')

const server = http.createServer((req, res) => {
  console.log("user visited the page!", req.url);

  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>lets welcome this gay to teh home page</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h2>Your mom is not gay</h2>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h3>Smashing pumpkins is a great band</h3>");
  }
  
});

server.listen(5000);

const http = require('http');
const {readFileSync} = require('fs');

// get all files
const favicon = readFileSync('./navbar-app/favicon.ico');
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req,res) => {
  console.log('user visited the page!', req.url);

  const url = req.url;
  if(url === '/') {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(homePage);
  }
  else if(url === '/favicon.ico') {
    res.writeHead(200, {
      'content-type' : 'image/x-icons',
      'cache-control': 'no-store'
    });
    res.write(favicon);
  } 
  else if(url === '/about.html') {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h2>About page landing</h2>');
  }
  else if(url === '/styles.css') {
    res.writeHead(200, {'content-type' : 'text/css'});
    res.write(homeStyle);
  }
  else if(url === '/logo.svg') {
    res.writeHead(200, {'content-type' : 'image/svg+xml'});
    res.write(homeLogo);
  }
  else if(url === '/browser-app.js') {
    res.writeHead(200, {'content-type' : 'text/javascript'});
    res.write(homeLogic);
  }
  else {
    res.writeHead(404, {'content-type' : 'text/html'});
    res.write('<h3>Your mom not found</h3>');
  }
  res.end();
});

server.listen(5000);
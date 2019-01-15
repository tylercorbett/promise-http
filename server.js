const http = require('http');
const { parse } = require('url');

http.createServer((req, res) => {
  const url = parse(req.url);
  if(url.pathname === '/birthday') {
    console.log('it worked'); 
  }

  res.setHeader('Content-Type', 'text/html')
  res.end('<html><head><title>Testing</title></head><body><h1>Thanks for visiting!</h1></body></html>');
})
  .listen(7890);


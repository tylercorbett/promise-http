const http = require('http');
const { parse } = require('url');

http.createServer((req, res) => {
  const url = parse(req.url);
  let message = '';

  if(url.pathname === '/birthday') {
    message = 'happy birthday';
  }
  else if(url.pathname === '/tomorrow') {
    message = 'tomorrow for sure';
  }
  else if(url.pathname === '/birthday/tomorrow') {
    message = 'happy birthday tomorrow';
  }
  else {
    message = '404 where did the page go?';
  }

  res.setHeader('Content-Type', 'text/html');

  res.end(`
  <html>
    <head>
        <title>
            Testing
        </title>
    </head>
    <body>
        <h1 style="color:purple">
            ${message}
        </h1>
    </body>
  </html>
  `);
})
  .listen(7890);


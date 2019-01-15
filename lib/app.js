const { parse } = require('url');


const app = ((req, res) => {
  const url = parse(req.url);

  if(url.pathname === '/testing') {
    res.end('testing123');
  }
    
});







module.exports = app;
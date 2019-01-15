const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url);
  res.setHeader('Content-Type', 'application/json');

  if(url.pathname === '/tester') {
    res.end(JSON.stringify({ testing: 123 }));
  }
};

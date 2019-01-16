const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/note') {
    res.setHeader('Content-Type', 'application/json');
    res.end();
  }
};

const { parse } = require('url');
const getCharacter = require('../lib/services/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  
  if(url.pathname.includes('/character/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      });
  }

};

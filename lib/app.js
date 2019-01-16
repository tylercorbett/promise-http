const { parse } = require('url');
const { getCharacter, getCharacters } = require('../lib/services/rickAndMortyApi');

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
  else if(url.pathname.includes('/characters/')) {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><ul>');
        characters.map(character => {
          res.write(`
            <li>
            <strong>${character.name}</strong>
            ${character.status}
            ${character.species}
            </li>
          `);
        });
        res.end('</ul></body></html>');
      });
  }
};

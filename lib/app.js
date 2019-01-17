const { parse } = require('url');
const { getCharacter, getCharacters } = require('../lib/services/rickAndMortyApi');
const bodyParser = require('./bodyParser');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  let notes = { '1': ['My favorite character'] };
  
  if(url.pathname.includes('/character/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      });
  }
  else if(url.pathname.includes('/characters') && req.method === 'POST') {
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;
        if(notes[id]) {
          notes[id].push(note);
        }
        else {
          notes[id] = [];
          notes[id].push(note);
        }
        res.statusCode = 204;
        res.end();
      });
  }
  else if(url.pathname.includes('/characters/') && req.method === 'GET') {
    const id = url.pathname.slice(1).split('/')[1];
    const note = notes[id][0];
    getCharacter(id)
      .then(character => {
        res.write('');
        res.write(`
            <html>
              <body>
                <h2>${character.name}</h2>
                <h4>${character.status}</h4>
                <h4>${character.species}</h4>
                <p>${note}</p>
              </body>
            </html>
        `);
        res.end();
      });
  }
  else if(url.pathname.includes('/characters') && req.method === 'GET') {
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
        res.end();
      });
  }
};

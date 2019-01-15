const request = require('superagent');

const getCharacter = id => {
  request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      console.log(res);
    });
};

getCharacter(1);

module.exports = getCharacter;

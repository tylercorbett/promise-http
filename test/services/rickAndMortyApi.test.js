const getCharacter = require('../../lib/services/rickAndMortyApi');

describe('rick and morty api tests', () => {
  it.skip('gets a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanche',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});



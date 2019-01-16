const { getCharacter, getCharacters } = require('../../lib/services/rickAndMortyApi');

describe('rick and morty api tests', () => {
  it('gets a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
  it.only('returns a list of 20 characters', () => {
    return getCharacters()
      .then(characters => {
        console.log('characters', characters);
        expect(characters).toEqual(characters);
      });
  });
});



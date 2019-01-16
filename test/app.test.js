const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/__mocks__/rickAndMortyApi');

describe('app', () => {
  it('gets a character based on id given', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
  it('returns 2 character names', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text.length).toEqual(2661);
      });
  });
});


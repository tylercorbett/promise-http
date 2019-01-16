const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/__mocks__/rickAndMortyApi');

describe('app', () => {
  it('has a tester route', () => {
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
});


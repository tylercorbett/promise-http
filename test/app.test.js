const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .post('/you')
      .send({ text: 'This is a note' })
      .then(res => {
        expect(res.body).toEqual({ text: 'This is a note' });
      });
  });
});


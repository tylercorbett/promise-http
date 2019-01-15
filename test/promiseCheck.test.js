const promiseCheck = require('../lib/promiseCheck');
const fsPromise = require('fs').promises;

describe('promiseCheck', () => {
  it('returns true if promise is passed', () => {
    expect(promiseCheck(fsPromise.readFile('./http.md'))).toBeTruthy();
  });
});

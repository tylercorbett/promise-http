const fsPromises = require('fs').promises;
const copy = require('../lib/copy');


describe('promise tests', () => {
  it('copies a source file into a destination file', () => {
    copy('./http.md', './http-copy.md')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./http'),
          fsPromises.readFile('./http-copy.md')
        ])
          .then(([httpMd, httpCopyMd]) => {
            expect(httpMd).toEqual(httpCopyMd);
          });
      });
  });
});



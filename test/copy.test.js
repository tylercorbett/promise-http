const fsPromises = require('fs').promises;
const copyFile = require('../lib/copy');


describe('promise tests', () => {
  it('copys a source file into a destination file', () => {
    copyFile('./http.md', './http-copy.md')
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



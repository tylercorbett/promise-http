/* eslint-disable no-console */
const fsPromises = require('fs').promises;

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.error(err));

fsPromises.writeFile('test.txt', 'testing123')
  .then(() => console.log('DONE'))
  .catch(err => console.error(err));


const readPromise = src => new Promise((resolve, reject) => {
  fsPromises.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});


readPromise('./http.md')
  .then(data => console.log(data));



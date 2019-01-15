const fsPromises = require('fs').promises;

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.error(err));

fsPromises.writeFile('test.txt', 'testing123')
  .then(() => console.log('DONE'))
  .catch(err => console.error(err));



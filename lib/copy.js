const fsPromises = require('fs').promises;

function copy(src, dst) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => fsPromises.writeFile(dst, data))
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
}
  
module.exports = copy;

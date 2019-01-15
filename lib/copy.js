const fsPromises = require('fs').promises;

function copyFile(src, dst) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => fsPromises.writeFile(dst, data))
    .catch(err => console.error(err));
}
  
module.exports = copyFile;

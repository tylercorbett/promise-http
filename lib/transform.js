const fsPromises = require('fs').promises;

function transform(file) {
  fsPromises.readFile(file, { encoding: 'utf8' })
    .then(data => console.log(data))
    .catch(err => console.error(err));
    
}
transform('transform.txt');

module.exports = transform;

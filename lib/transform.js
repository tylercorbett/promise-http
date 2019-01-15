const fsPromises = require('fs').promises;

function transform(file) {
    fsPromises.readFile('../transform.txt', { encoding: 'utf8' })
      .then(data => console.log(data));
    
}


module.exports = transform;

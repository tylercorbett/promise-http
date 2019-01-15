const fsPromises = require('fs').promises;

const read = src => fsPromises.readFile(src, { encoding: 'utf8' });

const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};

const makeAllLettersCapital = str => str.toUpperCase();

const reverse = str => str.reverse();

const trim = str => str.trim();

const transform = src => {
  return read(src)
    .then(removeCapitals)
    .then(makeAllLettersCapital)
    .then(reverse)
    .then(trim);
};

module.exports = transform;

const transform = require('../lib/transform');

describe('transform', () => {
  it('transforms some file', () => {
    return transform('./transform.txt')
      .then(transTxt => {
            

        expect(transTxt).toEqual('EREH I');
      });
  });
});


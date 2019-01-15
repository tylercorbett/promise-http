const transform = require('../lib/transform');


describe('transform', () => {
  it.skip('transforms some file', () => {
    return transform('./transform.txt')
      .then(transTxt => {
            

        expect(transTxt).toEqual('EREH I');
      });
  });
});


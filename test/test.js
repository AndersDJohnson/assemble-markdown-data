var fs = require('fs');
var assert = require("assert");
describe('Array', function() {
  it('should x', function () {
    assert.equal(
      fs.readFileSync(__dirname + '/cases/newline/expected/index.html', 'utf8'),
      fs.readFileSync(__dirname + '/cases/newline/build/index.html', 'utf8')
    );
  })
});

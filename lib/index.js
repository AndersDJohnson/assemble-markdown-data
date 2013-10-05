var traverse = require('traverse');
var marked = require('marked');

module.exports = function (params, next) {
  var context = params.context;
  var options = params.assemble.options;
  if (options.marked) {
    marked.setOptions(options.marked);
  }
  traverse(context).forEach(function (item) {
    if (this.circular) {
      return;
    }
    if (item && item.markdown) {
      this.update(marked(item.markdown));
    }
  });
  next();
};

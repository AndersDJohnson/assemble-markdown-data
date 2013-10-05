module.exports = function (grunt) {

  //var relatedTags = require('./lib/index')();

  grunt.initConfig({
    assemble: {
      example_1: {
        options: {
          engine: 'handlebars',
          layout: 'example/1/src/layouts/default.hbs',
          plugins: [
            './lib/*.js'
          ]
        },
        files: [
          {
            expand: true,
            cwd: 'example/1/src/content',
            src: ['**/*.hbs'],
            dest: 'example/1/build'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['assemble']);

};
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
      },
      newline: {
        options: {
          engine: 'handlebars',
          plugins: [
            './lib/*.js'
          ],
          data: ['example/newline/data/*']
        },
        files: [
          {
            expand: true,
            cwd: 'example/newline/src/content',
            src: ['**/*.hbs'],
            dest: 'example/newline/build'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['assemble']);

};
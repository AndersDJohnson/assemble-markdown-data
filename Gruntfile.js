module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('assemble');

  //var relatedTags = require('./lib/index')();

  grunt.initConfig({
    assemble: {
      // example_1: {
      //   options: {
      //     engine: 'handlebars',
      //     layout: 'test/cases/1/src/layouts/default.hbs',
      //     plugins: [
      //       './lib/*.js'
      //     ]
      //   },
      //   files: [
      //     {
      //       expand: true,
      //       cwd: 'test/cases/1/src/content',
      //       src: ['**/*.hbs'],
      //       dest: 'test/cases/1/build'
      //     }
      //   ]
      // },
      newline: {
        options: {
          engine: 'handlebars',
          plugins: [
            './lib/*.js'
          ],
          data: ['test/cases/newline/data/*']
        },
        files: [
          {
            expand: true,
            cwd: 'test/cases/newline/src/content',
            src: ['**/*.hbs'],
            dest: 'test/cases/newline/build'
          }
        ]
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          // captureFile: 'test-results.txt', // Optionally capture the reporter output to a file
          // quiet: false, // Optionally suppress output to standard out (defaults to false)
          // clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('test', ['assemble', 'mochaTest']);

  grunt.registerTask('default', ['assemble']);

};
module.exports = function(grunt){

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ["../javascripts/*.js"]
    },
    jshint: {
      options: {
        predef: ["document", "console", "$", "debugger"],
        esnext: true,
        globalstrict: true,
        globals: {"$": true},
        jquery: true,
        browserify: true
      },
      files: ['../javascripts/**/*.js']
    },
  
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      
      browserify: {
        files: ['../javascripts/*.js'],
        tasks: ["browserify"]
      },
      options: {
          browserifyOptions: {
            paths: ["./node_modules"]
          },
      },

    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','browserify', 'watch']);

};

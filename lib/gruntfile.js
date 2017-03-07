module.exports = function(grunt){

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../javascripts/main.js']
    },
    jshint: {
      options: {
        predef: ["document", "console"],
        esnext: true,
        globalstrict: true,
        globals: {"$": true},
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
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','browserify', 'watch']);

};

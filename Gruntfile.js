module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    serve: {
        options: {
            port: 9000
        }
    },

    sass: {
      options: {
        includePaths: []   
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'www/css/style.css': 'scss/main.scss'
        }        
      }
    },

    watch: {
      grunt: { 
        files: ['Gruntfile.js', 'www/*/**'] 
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      options: { 
        livereload: true, 
        host: 'localhost',
        port: 35729
      } //Add Live Reload Chrome Extension for this to work
    },


  });

grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-serve');

grunt.registerTask('default', 'watch');
};
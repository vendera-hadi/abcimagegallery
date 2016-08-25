module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      core: {
        files: {
          'js/core.min.js': ['js/core.js']
        }
      },
      main: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },
    concat: {
      dist: {
        src: ['vendors/jquery/dist/jquery.min.js', 'vendors/vue/dist/vue.min.js', 'material/material.min.js'],
        dest: 'js/core.js',
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      core: {
        files: {
          'css/styles.min.css': ['css/styles.css']
        }
      }
    },
    less: {
      development: {
        options: {
          // paths: ['assets/css']
        },
        files: {
          'css/styles.css': 'css/styles.less'
        }
      }
    },
    watch: {
      files: ['js/main.js'],
      tasks: ['uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less','concat','uglify','cssmin']);

};
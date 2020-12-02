'use strict'
const sass = require('node-sass')

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compact'
      },
      dist: {
        files: {
          'adaptive-page/styles.css': 'adaptive-page/styles/index.scss'
        }
      }
    },
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      styles: {
        files: 'adaptive-page/styles/**/*.scss',
        tasks: ['sass']
      },
      grunt: {
        files: ['Gruntfile.js']
      }
    },
    concurrent: {
      dev: [
        'watch',
        'sass'
      ],
      options: {
        logConcurrentOutput: true,
        limit: 8
      }
    }
  })

  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-concurrent')

  grunt.registerTask('default', ['concurrent:dev'])
  grunt.registerTask('build', [
    'sass'
  ])
}

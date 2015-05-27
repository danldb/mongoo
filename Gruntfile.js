module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({
    webdriver: {
      helloWorld: {
        tests: 'spec/**/*.js'
      },
      options: {
        desiredCapabilities: {
          browserName: 'chrome'
        }
      }
    },
  })

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};
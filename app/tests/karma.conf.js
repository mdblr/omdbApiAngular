module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js',
      'https://code.angularjs.org/1.5.5/angular-mocks.js',
      'app/**/*.js',
      'tests/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

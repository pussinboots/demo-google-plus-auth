// Karma configuration
// Generated on Wed Aug 14 2013 22:33:43 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.1.4/angular.js',
            'http://code.angularjs.org/1.1.4/angular-resource.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.1.4/angular-cookies.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.1.4/angular-sanitize.js',
            'public/js/*.js',
            'public/js/lib/*.js',
            'public/test/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'public/test/lib/jasmine/*',
            'public/test/lib/jasmine-jstd-adapter/*',
            'public/test/e2e/*.js',
            'public/test/lib/angular/angular-scenario.js',
            'public/test/lib/angular/jstd-scenario-adapter.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage', 'dots'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Firefox','Opera'/*,'Chrome'*/], //Chrome not started in travis ci


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        proxies: {
            '/test/lib/angular/': 'http://localhost:8888/test/lib/angular/'
        },

        urlRoot: '/__karma/'
    });
};

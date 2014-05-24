'use strict';

/* App Module */
var interpolateModule = angular.module('angularjs-interpolate-interceptor', []);

interpolateModule.factory('interpolateInterceptor', function ($rootScope, $interpolate) {
    return {
        request: function (config) {
            var exp = $interpolate(config.url);
            config.url  = exp({config: $rootScope.config})
            return config;
        }
    };
});

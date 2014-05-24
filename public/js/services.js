'use strict';

/* Services */

angular.module('Services', ['ngResource'], function ($provide) {

    $provide.factory('ServiceA', function ($resource, $rootScope) {
        var resource = $resource('/{{config.valuea}}/', {}, {
            get: {method: 'GET', params: {}},
        });
        return resource;
    });

    $provide.factory('ServiceB', function ($resource, $rootScope) {
        var resource = $resource('/{{config.valueb}}/', {}, {
            get: {method: 'GET', params: {}}
        });
        return resource;
    });
});

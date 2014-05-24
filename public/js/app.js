'use strict';

/* App Module */
var myModule = angular.module('demoApp', ['Services','directive.g+signin'])

myModule.config(function ($routeProvider) {
    $routeProvider
        .when('/connect', { templateUrl: 'partials/connect-detail.html', controller: ConnectCtrl})
        .otherwise({ redirectTo: '/connect' });
})

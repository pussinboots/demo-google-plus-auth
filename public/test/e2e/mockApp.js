var myAppDev = angular.module('demoApp-Mock', ['demoApp', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    var user = {name: 'Sandra'};
    $httpBackend.whenGET('/prod').respond({system:'/prod'});
    $httpBackend.whenGET('/test').respond({system:'/test'});
    $httpBackend.whenGET(/partials\/.*/).passThrough();
    $httpBackend.whenGET(/\/.*/).respond(function(method, url, data) {return[200,{system:url}]});
}]);

'use strict';

angular.module('app', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTouch',
    'vr.directives.slider',
    'nvd3ChartDirectives',
    'nvd3'
  ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
          });
      });

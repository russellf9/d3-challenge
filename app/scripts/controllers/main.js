(function() {
    'use strict';


    angular.module('app')
    .controller('MainCtrl', ['Model', function($scope, Model) {

        this.test = 'my test';

        console.log('MainCtrl | model: ', Model);


      }]);
  }());

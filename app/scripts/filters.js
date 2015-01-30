(function() {

    'use strict';
    angular.module('app').filter('capitalizeAllWords', function() {
      return function(input) {

        return input.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
      };
    });
  }());

(function() {

    'use strict';

    /**
     * A service for the d3 data
     */
    angular.module('app').service('Model', ['$rootScope', '$http', function($rootScope, $http) {

        var _data;


        return {

            getData: function(callback) {
                if (_data) {
                  callback(_data);
                } else {
                  $http.get('data/predict.json').success(function(data) {
                        _data = data;
                        callback(data);
                      });
                }
              }
          };

      }]);
  }());
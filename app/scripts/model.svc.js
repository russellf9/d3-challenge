(function() {

    'use strict';

    /**
     * A service for the d3 data
     */
    angular.module('app').service('Model', ['$rootScope', '$http', function($rootScope, $http) {

        var _data,
            _currentPeriod,
            _values = {};

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
              },
            // just the numerical value
            setCurrentPeriod : function(value) {
                console.log('setCurrentPeriod');

                _currentPeriod = value;

                this.update();
              },
            getCurrentPeriod : function() {
                return _values.currentPeriod;
              },
            getUpdateValues: function() {
                return _values;
              },
            update : function() {
                console.log('update');
                _values.currentPeriod =  _currentPeriod;

                $rootScope.$broadcast('valuesUpdated');
              }
          };

      }]);
  }());
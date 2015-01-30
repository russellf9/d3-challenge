(function() {

    'use strict';

    /**
     * A service for the d3 data
     */
    angular.module('app').service('Model', ['$rootScope', '$http', function($rootScope, $http) {

        var _data,
            _currentPeriod,
            _growthType,
            _multiplier,
            _values = {};

        return {
            // for the json data
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
            // period - just the numerical value
            setCurrentPeriod : function(value) {
                console.log('setCurrentPeriod');

                _currentPeriod = value;

                this.update();
              },
            getCurrentPeriod : function() {
                return _values.currentPeriod;
              },
            // growth
            setGrowthType: function(value) {
                _growthType = value;
                // has the side effect of setting the multiplier
                if (_growthType === 'Linear') {
                    _multiplier = 1;
                }
                this.update();
            },
            getGrowthType: function() {
                return _growthType;
            },
            // multiplier
            setMultiplier: function(value) {
                _multiplier = value;
                this.update();
            },
            getMultiplier: function(value) {
                return _multiplier;
            },
            getUpdateValues: function() {
                return _values;
              },
            // update
            update : function() {
                console.log('update');
                _values.currentPeriod =  _currentPeriod;

                $rootScope.$broadcast('valuesUpdated');
              }
          };

      }]);
  }());
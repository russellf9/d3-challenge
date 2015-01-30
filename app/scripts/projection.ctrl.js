(function() {

    'use strict';

    //controller for `projection`
    angular.module('app').controller('Projection', ['Model', '$scope', function(Model, $scope) {

        console.log('Projection! | Model: ',Model);

        var self = this;

        // watches for any change in the `model state`
        // using $on rather than $watch
        $scope.$on('valuesUpdated', function() {
            console.log('update!: ', Model);

            self.currentPeriod = Model.getCurrentPeriod();
        });

      }]);
  }());


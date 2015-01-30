(function() {

    'use strict';

    //controller for `projection`
    angular.module('app').controller('Projection', ['Model', '$scope', function(Model, $scope) {

        console.log('Projection! | Model: ',Model);

        var self = this;

        this.currentMonth = 10;

        // watches for any change in the `model state`
        // using $on rather than $watch
        $scope.$on('valuesUpdated', function() {
            console.log('update!: ', Model);

            self.currentPeriod = Model.getCurrentPeriod();

            self.currentGrowthType = Model.getGrowthType();

            self.multiplier = Model.getMultiplier();
        });


        // Slider options with event handlers
        this.slider = {
            'options': {
                start: function (event, ui) { $log.info('Event: Slider start - set with slider options', event); },
                stop: function (event, ui) { $log.info('Event: Slider stop - set with slider options', event); }
            }
        };

        this.demoVals = {
            sliderExample3:     14,
            sliderExample4:     14,
            sliderExample5:     50,
            sliderExample8:     0.34,
            sliderExample9:     [-0.52, 0.54],
            sliderExample10:     -0.37
        };

      }]);
  }());


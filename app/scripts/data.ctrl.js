(function() {

    'use strict';

    // a shared controller for the data
    angular.module('app').controller('Data', ['Model', function(Model) {

        var self = this;

        // define possible month periods
        this.forecastPeriods = [
            { id: 1, name: '3 Months', period: 3 },
            { id: 2, name: '6 Months', period: 6 },
            { id: 3, name: '12 Months', period: 12 }
          ];

        this.growthTypes = ['Linear','Exponential'];

        this.multiplier = 1;

        this.timeframe = 1;


        // load the initial data
        Model.getData(function(results) {
            self.model = results;

            self.forecastMonths = results.forecast_months;

            // nasty hack - would use lo-dash to select item by `period`
            self.currentPeriod = self.forecastPeriods[1];
            Model.setCurrentPeriod(self.currentPeriod.period);

            self.currentGrowthType = self.growthTypes[Number(results.growth_type)];
            Model.setGrowthType(self.currentGrowthType);

            Model.setMultiplier(self.multiplier);
          });

        // sets the new value of the time period
        this.updateForecastPeriod = function() {
            if (!this.currentPeriod) {
                return;
            }
            Model.setCurrentPeriod(this.currentPeriod.period);
          };

        // sets the new value of the growth type
        this.updateGrowthType = function() {
            if (!this.currentGrowthType) {
                return;
            }
            Model.setGrowthType(this.currentGrowthType);
        };
        // sets the value of the multiplier
        this.updateMultiplier = function() {
            if (!this.multiplier) {
                return;
            }
            Model.setMultiplier(this.multiplier);
        };
        // sets the timeframe
        this.updateTimeframe = function() {
            if (!this.timeframe) {
                return;
            }
            Model.setTimeframe(this.timeframe);
        };

      }]);
  }());


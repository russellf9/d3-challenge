(function() {

    'use strict';

    // a shared controller for the data
    angular.module('app').controller('Data', ['Model', function(Model) {

        console.log('data ctrl! model: ', Model);

        var self = this;

        // define possible month periods

        this.forecastPeriods = [
            { id: 1, name: '3 Months', period: 3 },
            { id: 2, name: '6 Months', period: 6 },
            { id: 3, name: '12 Months', period: 12 }
          ];

        this.growthTypes = ['Linear','Exponential'];

        this.multiplier = 1;


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
            console.log('updateForecastPeriod ', this.currentPeriod);

            if (!this.currentPeriod) {
                return;
            }
            Model.setCurrentPeriod(this.currentPeriod.period);
          };

        // data.updateGrowthType()
        this.updateGrowthType = function() {
            console.log('updateGrowthType ', this.currentGrowthType);

            if (!this.currentGrowthType) {
                return;
            }
            Model.setGrowthType(this.currentGrowthType);
        };

        this.updateMultiplier = function() {
            console.log('updateMultiplier ', this.multiplier);

            if (!this.multiplier) {
                return;
            }
            Model.setMultiplier(this.multiplier);
        }



      }]);
  }());


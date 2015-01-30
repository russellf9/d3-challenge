(function() {

    'use strict';

    // a shared controller for the data
    angular.module('app').controller('Data', ['Model', function(Model) {

        console.log('data ctrl! model: ', Model);

        var self = this;

        Model.getData(function(results) {
            self.model = results;


        });

      }]);
  }());


'use strict';

/**
 * @ngdoc function
 * @name summerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the summerApp
 */

// Main Controller

summerApp.controller('MainCtrl', function($scope){

  $scope.snapOpts = {
    disable: 'right'
  };

});

summerApp.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
});

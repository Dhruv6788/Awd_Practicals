angular.module('myApp', [])
  .controller('myController', ['$scope', 'squareService', function($scope, squareService) {
    $scope.calculateSquare = function() {
      $scope.result = squareService.calculateSquare($scope.number);
    };
  }])
  .service('squareService', function() {
    this.calculateSquare = function(number) {
      return number * number;
    };
  });

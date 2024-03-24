angular.module('myApp', [])
  .controller('myController', ['$scope', 'calculationService', function($scope, calculationService) {
    $scope.add = function() {
      $scope.result = calculationService.add($scope.number1, $scope.number2);
    };

    $scope.subtract = function() {
      $scope.result = calculationService.subtract($scope.number1, $scope.number2);
    };
  }])
  .service('calculationService', function() {
    this.add = function(num1, num2) {
      return num1 + num2;
    };

    this.subtract = function(num1, num2) {
      return num1 - num2;
    };
  });

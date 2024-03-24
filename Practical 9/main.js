angular.module('myApp', ['ngMessages'])
  .controller('PasswordController', ['$scope', function($scope) {
    $scope.user = {
      password: '',
      confirmPassword: ''
    };

    $scope.validatePassword = function() {
      $scope.passwordForm.confirmPassword.$setValidity('match', $scope.user.password === $scope.user.confirmPassword);
    };
  }]);

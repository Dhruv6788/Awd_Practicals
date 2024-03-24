angular.module('myApp', [])
  .controller('myController', ['$scope', '$http', function($scope, $http) {
    $scope.students = [];
    $scope.selectedEnrollment = ''; 
    $scope.fetchStudentData = function() {
      $http.get('student.json')
        .then(function(response) {
            console.log(response)
          $scope.students = response.data; 
        }, function(error) {
          console.error('Error fetching student data:', error);
        });
    };
    $scope.fetchStudentData();
  }]);

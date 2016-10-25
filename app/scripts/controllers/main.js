'use strict';

angular.module('gpTestApp')
  .controller('resultsTableCtrl', ['$scope', 'calculatorService', function ($scope, calculatorService) {
    $scope.resultsHistory = calculatorService.resultsHistory;
  }])

  .controller('calculatorCtrl', ['$scope', 'calculatorService', function($scope, calculatorService) {
    $scope.operands = [];
    $scope.operator = null;
    $scope.availableOperators = ['+', '/', '%', 'GCD'];
    $scope.errorMessage = '';

    /**
     * Calculate the result for existing operands and selected operator
     */
    $scope.calculate = function () {
      validateInputData();
      if (!$scope.errorMessage) {
        calculatorService.calculate($scope.operands, $scope.operator);
      }
    };

    function validateInputData() {
      $scope.errorMessage = '';
      if (typeof $scope.operands[0] === 'undefined' || typeof $scope.operands[1] === 'undefined') {
        $scope.errorMessage = 'Please enter operands';
      } else if (!$scope.operator) {
        $scope.errorMessage = 'Please select operator';
      }
    }

  }])

  .directive('resultsTable', function() {
    return {
      restrict: 'E',
      replace: true,
      controller: 'resultsTableCtrl',
      scope: {},
      templateUrl: '/templates/results-table.html'
    };
  })
  .directive('calculator', function() {
    return {
      restrict: 'E',
      replace: true,
      controller: 'calculatorCtrl',
      scope: {},
      templateUrl: '/templates/calculator.html'
    };
  });

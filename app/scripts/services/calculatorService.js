'use strict';
angular.module('gpTestApp')
  .service('calculatorService', function() {
    var self = this;

    this.resultsHistory = [];

    this.calculate = function(operands, operator) {
      var result;
      if (!isValidOperand(operands[0]) || !isValidOperand(operands[1])) {
        throw new Error('Invalid parameters');
      }
      switch (operator) {
        case '+':
          result = operands[0] + operands[1];
          break;
        case '/':
          if (operands[1] === 0) {
            throw new Error('Invalid operation');
          }
          result = operands[0] / operands[1];
          break;
        case '%':
          result = operands[0] % operands[1];
          break;
        case 'GCD':
          result = gcd(operands[0], operands[1]);
          break;
        default:
          throw new Error('Operator is not recognized');
      }
      self.saveResult(result);
      return result;
    };

    this.saveResult = function(result) {
      if(typeof result !== 'undefined') {
        self.resultsHistory.push({
          value: result,
          date: Date.now()
        });
      }
    };

    function isValidOperand(operand) {
      return typeof operand !== 'undefined' && !isNaN(operand);
    }

    function gcd(x, y) {
      while (y !== 0) {
        var z = x % y;
        x = y;
        y = z;
      }
      return x;
    }
  });

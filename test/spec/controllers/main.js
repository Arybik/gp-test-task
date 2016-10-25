'use strict';

describe('Calculation service', function () {

  var _calculatorService;

  // load the controller's module
  beforeEach(module('gpTestApp'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function (calculatorService) {
    _calculatorService = calculatorService;
  }));

  it('should init calculator service', function () {
    expect(_calculatorService).not.to.equal(null);
  });

  it('should calculate sum', function () {
    expect(_calculatorService.calculate([0, 0], '+')).toEqual(0);
    expect(_calculatorService.calculate([6, -5], '+')).toEqual(1);
    expect(_calculatorService.calculate([2.5, 3.1], '+')).toEqual(5.6);
    expect(_calculatorService.calculate([-1, 2.5], '+')).toEqual(1.5);
  });

  it('should calculate divide', function () {
    expect(_calculatorService.calculate([6, 3], '/')).toEqual(2);
    expect(_calculatorService.calculate([0, 4], '/')).toEqual(0);
    expect(_calculatorService.calculate([-1, 5], '/')).toEqual(-0.2);
  });

  it('should calculate remainder of a division', function () {
    expect(_calculatorService.calculate([120, 4], '%')).toEqual(0);
    expect(_calculatorService.calculate([10, 8], '%')).toEqual(2);
    expect(_calculatorService.calculate([3, 10], '%')).toEqual(3);
  });
});

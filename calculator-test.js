it('should calculate the monthly rate correctly', function () {
  const values = { amount: 10000, years: 4, rate: 5.5 };
  expect(calculateMonthlyPayment(values)).toEqual('231.60');
});

it('should return a result with 2 decimal places', function() {
  const values = { amount: 10000, years: 4, rate: 5.5 };
  const result = calculateMonthlyPayment(values);
  expect(result).toEqual('231.60');
});
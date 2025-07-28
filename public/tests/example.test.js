function sum(a, b) {
  return a + b;
}

test('sum two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
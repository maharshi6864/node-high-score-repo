const { validateScore } = require('../src/validation');

test('validates positive scores', () => {
  expect(validateScore(100)).toBe(true);
});

test('rejects negative scores', () => {
  expect(validateScore(-10)).toBe(false);
});

test('rejects invalid scores', () => {
  expect(validateScore('abc')).toBe(false);
});

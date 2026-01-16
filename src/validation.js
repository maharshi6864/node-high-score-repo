function validateScore(score) {
  if (typeof score !== 'number') return false;
  if (score < 0) return false;
  return true;
}

module.exports = { validateScore };

export const sortParticipants = (list, criteria = 'positive') => {
  return list
    .map(p => ({
      ...p,
      positive: p.positive ? Number(p.positive) : 0,
      negative: p.negative ? Number(p.negative) : 0
    }))
    .sort((a, b) => {
      return b[criteria] - a[criteria];
    });
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sortParticipants };
}

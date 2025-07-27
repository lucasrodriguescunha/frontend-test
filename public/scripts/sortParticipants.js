export const sortParticipants = (list, criteria = 'positive') => {
  return list
    .map(p => ({
      ...p,
      // Garante que positive/negative sejam números válidos
      positive: p.positive ? Number(p.positive) : 0,
      negative: p.negative ? Number(p.negative) : 0
    }))
    .sort((a, b) => {
      // Ordenação decrescente: maior primeiro
      return b[criteria] - a[criteria];
    });
};

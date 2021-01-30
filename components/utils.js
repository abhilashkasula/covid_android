const getStateCount = (districts) =>
  districts.reduce(
    (total, dist) => {
      total.c += dist.confirmed;
      total.cd += dist.delta.confirmed;
      total.a += dist.active;
      total.d += dist.deceased;
      total.dd += dist.delta.deceased;
      total.r += dist.recovered;
      total.rd += dist.delta.recovered;
      return total;
    },
    {c: 0, cd: 0, a: 0, ad: 0, d: 0, dd: 0, r: 0, rd: 0},
  );

export {getStateCount};

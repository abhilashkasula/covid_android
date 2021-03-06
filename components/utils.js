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

const filterStates = (states, searchText) =>
  states.filter(({state}) => state.match(new RegExp(searchText, 'i')));

const getDelta = (n) =>
  n > 0 ? `↑${Math.abs(n)}` : n < 0 ? `↓${Math.abs(n)}` : '';

const descend = (a, b) => (a > b ? -1 : a < b ? 1 : 0);

export {getStateCount, filterStates, getDelta, descend};

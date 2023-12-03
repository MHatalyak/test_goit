export const arrayOfPrices = maxPrice => {
  const arr = [];
  for (let i = 20; i <= maxPrice; i += 5) {
    if (i === 20) {
      const obj = { value: i, label: 'All' };
      arr.push(obj);
    } else {
      const obj = { value: i, label: '$' + i };
      arr.push(obj);
    }
  }
  return arr;
};

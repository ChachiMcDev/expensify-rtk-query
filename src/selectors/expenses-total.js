export default (expenses) => {
  return expenses
    .map(({ amount }) => amount)
    .reduce((acc, value) => acc + value, 0);
};

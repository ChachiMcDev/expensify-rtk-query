
export default (expenses) => {
    // const theMap = expenses.map(({ amount }) => amount);

    // return theMap.reduce((n, amount) => n + amount, 0);
    return expenses
        .map(({ amount }) => amount)
        .reduce((acc, value) => acc + value, 0);
};


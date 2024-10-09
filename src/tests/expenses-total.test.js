import getExpensesTotal from '../selectors/expenses-total';

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const expenses = [{ amount: 100 }];
    const result = getExpensesTotal(expenses);
    expect(result).toBe(100);
});

test('should correctly add up multiple expenses', () => {
    const expenses = [
        { amount: 100 },
        { amount: 200 },
        { amount: 300 }
    ];
    const result = getExpensesTotal(expenses);
    expect(result).toBe(600);
});
import expensesSlice from '../slicereducers/expensesSlice';

const expensesDefaultState = [];


const { addExpense, removeExpense, editExpense } = expensesSlice.actions;

test('should setup default expenses values', () => {
    const state = expensesSlice.reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    const state = expensesSlice.reducer(expensesDefaultState, action);
    expect(state).toEqual([{
        id: expect.any(String),
        ...expenseData
    }]);
});

test('should remove an expense by id', () => {
    const currentState = [{
        id: '123abc',
        description: 'Rent',
        amount: 1000,
        createdAt: 1000
    }];
    const action = removeExpense({ id: '123abc' });
    const state = expensesSlice.reducer(currentState, action);
    expect(state).toEqual([]);
});

test('should not remove expenses if id not found', () => {
    const currentState = [{
        id: '123abc',
        description: 'Rent',
        amount: 1000,
        createdAt: 1000
    }];
    const action = removeExpense({ id: '999xyz' });
    const state = expensesSlice.reducer(currentState, action);
    expect(state).toEqual(currentState);
});

test('should edit an expense', () => {
    const currentState = [{
        id: '123abc',
        description: 'Rent',
        amount: 1000,
        createdAt: 1000
    }];
    const updates = {
        amount: 1200
    };
    const action = editExpense({ id: '123abc', ...updates });
    const state = expensesSlice.reducer(currentState, action);
    expect(state[0].amount).toBe(1200);
});

test('should not edit an expense if id not found', () => {
    const currentState = [{
        id: '123abc',
        description: 'Rent',
        amount: 1000,
        createdAt: 1000
    }];
    const updates = {
        amount: 1200
    };
    const action = editExpense({ id: '999xyz', ...updates });
    const state = expensesSlice.reducer(currentState, action);
    expect(state).toEqual(currentState);
});

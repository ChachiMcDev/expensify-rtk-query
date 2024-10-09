import { configureStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit';
import expensesSlice from '../slicereducers/expensesSlice';
import filtersSlice from '../slicereducers/filterSlice';
import authSlice from '../slicereducers/authSlice';
import { thunk } from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query'
import { getAllExpensesApi } from '../api/getAllExpenses';

const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = compose(middlewareEnhancer)

export default () => {

    const rootReducer = combineReducers({
        [getAllExpensesApi.reducerPath]: getAllExpensesApi.reducer,
        expenses: expensesSlice.reducer,
        filters: filtersSlice.reducer,
        auth: authSlice.reducer
    });

    // const store = configureStore({
    //     reducer: rootReducer,
    //     middleware: () => [thunk]
    // });

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
            .concat([thunk, getAllExpensesApi.middleware]),
    });

    setupListeners(store.dispatch)

    return store;

};


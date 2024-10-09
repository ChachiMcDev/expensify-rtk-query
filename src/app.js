import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import LoginPage from './components/LoginPage';
import { fetchExpenses } from './slicereducers/expensesSlice';
import { useGetAllExpensesQuery } from './api/getAllExpenses';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)


// const App = () => {
//     const { data, error, isLoading } = useGetAllExpensesQuery('getallexpenses')
//     // const { data, error, isLoading } = {
//     //     data: [{ description: 'Rent', amount: 100 }],
//     //     error: null,
//     //     isLoading: null
//     // }

//     return (
//         <div>
//             {error ? (
//                 <>Oh no, there was an error</>
//             ) : isLoading ? (
//                 <>Loading...</>
//             ) : data ? (
//                 <>
//                     <h3>{data.map((expense, iny) => (
//                         <div key={iny}>
//                             <h1>{expense.description}</h1>
//                             <h2>{expense.amount}</h2>
//                         </div>
//                     ))}</h3>

//                 </>
//             ) : null}
//         </div>

//     )

// }

// const testjsx = (
//     <Provider store={store}>
//         <App />
//     </Provider>

// )


const root = createRoot(document.getElementById('app'));
root.render(jsx);

//store.dispatch(fetchExpenses()).then(() => {


// const root = createRoot(document.getElementById('app'));
// root.render(jsx);

//})






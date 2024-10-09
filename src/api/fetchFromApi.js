import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const regUser = async (userObj) => {
    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    });
    const userInfo = await response.json();
    console.log('user info', userInfo);
    return userInfo;
};

const loginUser = createAsyncThunk('auth/login', async (userObj) => {
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        });
        const userInfo = await response.json();
        console.log('user info from fetch api', userInfo);
        Cookies.set('token', userInfo.token);
        return userInfo;

    } catch (error) {
        //   setError(error.message); // Set error if any
    } finally {
        //  setLoading(false); // Set loading to false after fetching is done
    }

});

const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async (userId) => {
    // const response = await getAllExpenses();
    console.log(userId)
    // return response;
    // State to store fetched data
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    try {
        const response = await fetch(`http://127.0.0.1:3000/api/expenses/${userId}`);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json(); // Convert response to JSON
        return result;

    } catch (error) {
        //   setError(error.message); // Set error if any
    } finally {
        //  setLoading(false); // Set loading to false after fetching is done
    }
});

const postExpense = createAsyncThunk('expenses/postExpense', async (expense) => {
    console.log('post expense', expense);
    const response = await fetch('http://localhost:3000/api/addexpense', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
    });
    const getjsonId = await response.json();
    return {
        ...expense,
        _id: getjsonId.result.insertedId
    };
});

const editExpenseWithId = createAsyncThunk('expenses/editExpense', async (expense) => {
    console.log('edit expense', expense);
    const response = await fetch('http://localhost:3000/api/editexpense', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
    });
    return expense;
});

const removeExpenseWithId = createAsyncThunk('expenses/removeExpense', async (id) => {
    console.log('remove expense', id);
    const response = await fetch('http://localhost:3000/api/deleteexpense', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });

    return id;
});

export { fetchExpenses, postExpense, editExpenseWithId, removeExpenseWithId, regUser, loginUser };
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../slicereducers/authSlice';
import { fetchExpenses } from '../slicereducers/expensesSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useGetAllExpensesQuery } from '../api/getAllExpenses';

const LoginPage = () => {
    const navToDash = useNavigate();
    const dispatch = useDispatch();



    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };
    const handleLogin = () => {
        if (formData.username === '' || formData.password === '') {
            alert('Please fill in all fields');
            return;
        }
        dispatch(loginUser(formData)).then((data) => {
            if (data.payload.isValid) {

                // dispatch(fetchExpenses(data.payload.userid));
                navToDash('/dashboard');
            } else {
                alert('Invalid credentials');
            }
        });


    };



    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Login To Expensify App</h1>
                <form>
                    <div className="box-layout__forminputs">
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleChange}

                            />
                        </div>

                    </div>

                    <button className="button" type="button" onClick={handleLogin} >Login</button>
                </form>
                <NavLink to="/register" className="box-layout__navlink">Register Account</NavLink>
            </div>

        </div>
    );
};

export default LoginPage;
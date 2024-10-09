import React, { useState } from 'react';
import { regUser } from '../api/fetchFromApi';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
    const navToLogin = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        valpassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (formData.password !== formData.valpassword) {
            alert('Passwords do not match');
            setFormData({
                ...formData,
                password: '',
                valpassword: ''
            });
        } else {
            regUser(formData).then((response) => {
                console.log('mfucking response', response);
                if (response.result) {
                    alert('User registered successfully');
                    navToLogin('/');
                } else if (response.userexist) {
                    alert('Username already exists, please log in');
                    navToLogin('/');
                }
            }).catch((error) => {
                console.log(error); // Handle error here        

            });
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div> */}
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="valpassword">Validate Password:</label>
                <input
                    type="password"
                    id="valpassword"
                    name="valpassword"
                    value={formData.valpassword}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterUser;
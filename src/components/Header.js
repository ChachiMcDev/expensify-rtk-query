import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authSlice from '../slicereducers/authSlice';

const Header = () => {
    const isActive = ({ isActive }) => isActive ? "is-active" : null
    const { loguserout } = authSlice.actions;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = () => {

        dispatch(loguserout())
        navigate('/');
    }


    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard">
                        <h1>Expensify</h1>
                    </Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>

            </div>
        </header>
    );
};

export default Header

// < NavLink to = "/create" className = { isActive } > Create Expense</ >
//     <NavLink to="/help" className={isActive}>Help</NavLink>
import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const isActive = ({ isActive }) => isActive ? "is-active" : null
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" className={isActive}>Expense Dashboard</NavLink>
            <NavLink to="/create" className={isActive}>Create Expense</NavLink>
            <NavLink to="/help" className={isActive}>Help</NavLink>
        </header>
    );
};

export default Header
import React from "react";
import { useLocation } from 'react-router-dom';

const ExpenseHelpPage = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            This is from the HELP expense component
        </div>
    )
};

export default ExpenseHelpPage
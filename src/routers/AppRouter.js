import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterUser';
import ProtectedRoute from './ProtectedRoutes';


const AppRouter = () => (
    <BrowserRouter >

        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <ExpenseDashboardPage />
                </ProtectedRoute>

            } />
            <Route path="/create" element={<ProtectedRoute>
                <AddExpensePage />
            </ProtectedRoute>
            } />
            <Route path="/edit/:id" element={<ProtectedRoute>
                <EditExpensePage />
            </ProtectedRoute>
            } />
            <Route path="/help" element={
                <ProtectedRoute>
                    <ExpenseHelpPage />
                </ProtectedRoute>
            } />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter
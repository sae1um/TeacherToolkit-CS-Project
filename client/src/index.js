// PACKAGE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './pages/Home/App';
import "./index.css";

// COMPONENT AND PAGE IMPORTS
import LoginPage from './components/onboarding/login';
import RegisterPage from './components/onboarding/signup';
import ErrorElementPage from './components/lib/errorElement';
import Testing from './components/testing/testing';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorElementPage />
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/home/teacher",
    element: <TeacherDashboard />
  },
  {
    path: "/home/student",
    element: <StudentDashboard />
  },
  // REMOVE TESTING
  {
    path: "/testing",
    element: <Testing />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


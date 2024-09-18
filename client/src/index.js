import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './pages/Home/App';
import "./index.css";
import LoginPage from './components/onboarding/login';
import RegisterPage from './components/onboarding/signup';
import ErrorElementPage from './components/lib/errorElement';
import Testing from './components/testing/testing';
import ToolkitHomePage from './pages/Home/toolkithomepage';

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
    path: "/home",
    element: <ToolkitHomePage />
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


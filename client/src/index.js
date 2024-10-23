// PACKAGE IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/Home/App";
import "./index.css";

// COMPONENT AND PAGE IMPORTS
import LoginPage from "./components/onboarding/Login";
import RegisterPage from "./components/onboarding/Signup";
import ErrorElementPage from "./components/lib/errorElement";
import Testing from "./components/testing/testing";

// Layouts
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";
// import TeacherToolkitLayout from './layouts/TeacherToolkitLayout';

// Dashboard Pages
import TeacherHomeGrid from "./components/grids/teacher/TeacherHomeGrid";
import TeacherToolkitGrid from "./components/grids/teacher/TeacherToolkitGrid";
import TeacherClasses from "./pages/Toolkit/TeacherClassesPage";

// Toolkit
import ToolkitTimerPage from "./pages/Toolkit/ToolkitTimerPage";
import TeacherAssignmentsPage from "./pages/Toolkit/ToolkitAssignmentsPage";
import TeacherWhiteboardPage from "./pages/Toolkit/ToolkitWhiteboardPage";
import ToolkitQuizPage from "./pages/Toolkit/ToolkitQuizPage";
import ToolkitStudentPicker from "./pages/Toolkit/ToolkitStudentPickerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElementPage />,
  },
  {
    path: "/home",
    children: [
      {
        path: "teacher",
        element: <TeacherLayout />,
        children: [
          { index: true, element: <TeacherHomeGrid /> },
          { path: "classes", element: <TeacherClasses /> },
          { path: "toolkit", element: <TeacherToolkitGrid /> },
          { path: "toolkit/timer", element: <ToolkitTimerPage />,},
          { path: "toolkit/student-picker", element: <ToolkitStudentPicker /> },
          { path: "toolkit/quiz-maker", element: <ToolkitQuizPage />, },
          { path: "toolkit/assignments",element: <TeacherAssignmentsPage />, },
          { path: "toolkit/whiteboard", element: <TeacherWhiteboardPage />, },
        ],
      },
      { path: "student", element: <StudentLayout />},
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  // REMOVE TESTING
  {
    path: "/testing",
    element: <Testing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

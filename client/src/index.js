// PACKAGE IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./pages/Home/App";
import "./index.css";

// Extras
import ProtectedRoute from "./components/ProtectedRoute"

// CONTEXT
import { AuthContextProvider } from "./context/AuthContext";
// import { useAuthContext } from "./hooks/useAuthContext";

// COMPONENT AND PAGE IMPORTS
import ErrorElementPage from "./components/lib/errorElement";

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
// import { ClassContextProvider } from "./context/ClassContext";
import TestPage from "./csTests";

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
        element:(<ProtectedRoute><TeacherLayout /></ProtectedRoute>),
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
      { path: "student", element: <ProtectedRoute ><StudentLayout /></ProtectedRoute>},
    ],
  },
  {
    path: "/login",
    element: (<ProtectedRoute path={"login"}><Navigate to="/home/teacher" /></ProtectedRoute>)
  },
  {
    path: "/register",
    element: (<ProtectedRoute path={"register"}><Navigate to="/home/teacher" /></ProtectedRoute>)
  },
  {
    path: "/test",
    element: <TestPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <ClassContextProvider> */}
        <RouterProvider router={router} />
      {/* </ClassContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Profile from "./screens/Profile";
import MainLayout from "./components/MainLayout";
import Hompage from "./screens/Homepage";
import UserProvider from "./context/UserContext";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Hompage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <UserProvider>
        <App />
      </UserProvider>
    </RouterProvider>
  </React.StrictMode>
);

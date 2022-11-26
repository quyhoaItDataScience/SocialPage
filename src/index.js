import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import UserProvider from "./context/UserContext";
import HomePage from "./pages/Homepage";
import UserDetailPage from "./pages/UserDetailPage";
import YourEvents from "./pages/YourEvents";
import ProfileDetail from "./pages/ProfileDetail";

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
      <Route index element={<HomePage />} />
      {/* <Route path="profile" element={<Profile />} /> */}
      {/* <Route path="signup" element={<SignUpPage />} />
      <Route path="signin" element={<Signin />} /> */}
      <Route path="profile-detail" element={<ProfileDetail />} />
      <Route path="your-events" element={<YourEvents />} />
      <Route path="userDetails" element={<UserDetailPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

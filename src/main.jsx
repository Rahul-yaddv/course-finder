import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Courses from "./Components/Courses.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Courses />
//       </div>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);

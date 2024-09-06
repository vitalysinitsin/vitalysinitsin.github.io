import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import reportWebVitals from "./reportWebVitals";
import { IconContext } from "react-icons";

const router = createBrowserRouter([
  {
    path: "/dev",
    element: <App />,
    children: [
      {
        path: "/dev",
        element: <AboutMe />,
      },
      {
        path: "/dev/projects",
        element: <Projects />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: "2rem" }}>
      <RouterProvider router={router} />
    </IconContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

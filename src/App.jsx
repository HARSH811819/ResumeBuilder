import { useState } from "react";

import "./App.css";
import One from "./components/Theme/One";
import { useSelector, useDispatch } from "react-redux";
import Form from "./components/Form";
import Two from "./components/Theme/Two";

import {
  BrowserRouter,
  Link,
  NavLink,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import Header from "./components/Header";
import ThemePanel from "./components/ThemePanel";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/one",
        element: <One />,
      },
      {
        path: "/two",
        element: <Two />,
      },
      {
        path: "/themepanel",
        element: <ThemePanel />,
      },
    ],
  },
]);

function App() {
  //   const btn = document.getElementById("button");

  const dispatch = useDispatch();

  return (
    <>
      <RouterProvider router={router} />
      <BrowserRouter></BrowserRouter>
      {/* <ThemePanel/> */}
      <div
        id="loadingscreen"
        className="bg-[rgb(0,0,0,0.6)] w-[100vw] flex items-center hidden justify-center h-[100vh] absolute left-0 top-0 z-50"
      >
        <div className="loader"></div>
      </div>
    </>
  );
}

export default App;

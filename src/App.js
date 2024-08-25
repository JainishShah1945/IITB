import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/screen/Home";
import Course from "./components/screen/Course";
import Instance from "./components/screen/Instance";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/courses",
      element: (
        <>
          <Navbar />
          <Course />
        </>
      ),
    },
    {
      path: "/instance",
      element: (
        <>
          <Navbar />
          <Instance />
        </>
      ),
    },
    ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

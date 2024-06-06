import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <div>cart</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

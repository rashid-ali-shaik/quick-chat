import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { homeLoader } from "./pages/Home";
import { store } from "./redux/store/store";
import { loginLoader } from "./pages/Login";
import { registerLoader } from "./pages/Register";
import Dashboard from "./pages/Dashboard";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => homeLoader(store),
      errorElement: <h1>hey</h1>,
      children: [
        {
          // path: "dashboard",
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
      loader: () => registerLoader(store),
      // errorElement: <h1>404 Not Found</h1>,
    },
    {
      path: "/login",
      element: <Login />,
      loader: () => loginLoader(store),
      errorElement: <h1>404 Not Found</h1>,
    },
    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;

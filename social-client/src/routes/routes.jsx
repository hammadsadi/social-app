import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/signin/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
import Main from "../layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;

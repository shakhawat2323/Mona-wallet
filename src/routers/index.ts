import App from "@/App";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import FAQ from "@/components/pages/FAQ";
import Features from "@/components/pages/Features";
import Pricing from "@/components/pages/Pricing";
import LoginPage from "@/modules/Authentication/LoginForm";
import RegisterPage from "@/modules/Authentication/RegisterForm";
import Verify from "@/modules/Authentication/verify";
// import LoginPage from "@/modules/Authentication/LoginForm";
// import RegisterPage from "@/modules/Authentication/RegisterForm";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: FAQ,
        path: "/faq",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: Pricing,
        path: "/pricing",
      },
    ],
  },
  {
    Component: RegisterPage,
    path: "/register",
  },
  {
    Component: LoginPage,
    path: "/login",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);

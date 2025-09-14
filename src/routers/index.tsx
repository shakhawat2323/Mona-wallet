import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout";

import About from "@/components/pages/About";

import Contact from "@/components/pages/Contact";
import FAQ from "@/components/pages/FAQ";
import Features from "@/components/pages/Features";

import { role } from "@/constants/role";

import Verify from "@/modules/Authentication/verify";
import { createBrowserRouter, Navigate } from "react-router";
import type { TRole } from "@/Types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import LoginPage from "@/modules/Authentication/LoginForm";
import RegisterPage from "@/modules/Authentication/RegisterForm";

import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import Unauthorized from "@/components/pages/Unauthorized";
import { agentSidebarItems } from "./agentSidebarItems";

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
  
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" replace /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.agent as TRole),
    path: "/agent",
    children: [
      { index: true, element: <Navigate to="/agent/overview" replace /> },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/overview" /> },
      ...generateRoutes(userSidebarItems),
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
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);

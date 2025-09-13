import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./routers/index.tsx";
import { ThemeProvider } from "./components/DarkAndLightMode/theme.provider.tsx";
import { Toaster } from "sonner";
import { Provider } from 'react-redux'
import { store } from "./Redux/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster richColors/>
    </ThemeProvider>
    </Provider>
  </StrictMode>
);
 
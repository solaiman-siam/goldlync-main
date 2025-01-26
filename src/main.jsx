import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import MainProvider from "@/providers/MainProvider";
import { route } from "@/routes/Routes";
import "@/assets/css/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={route} />
    </MainProvider>
  </StrictMode>
);

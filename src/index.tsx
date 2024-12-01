import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./App";
import { ThemeProvider } from "./lib/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <Landing />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import '@fontsource/pixelify-sans/400.css';
import '@fontsource/pixelify-sans/500.css';
import '@fontsource/pixelify-sans/600.css';
import '@fontsource/pixelify-sans/700.css';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <App />
    </Theme>
  </React.StrictMode>
);

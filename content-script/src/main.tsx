import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import Profile from "./Profile";

const targetDiv = document.querySelector(".second-level-menu-list");

const app = document.createElement("li");

app.id = "codeforces-explorer-root";


if (targetDiv) {
  targetDiv.appendChild(app);
}

const container = document.getElementById("codeforces-explorer-root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

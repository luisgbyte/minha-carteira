import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "./hooks/theme";

import App from "../src/App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

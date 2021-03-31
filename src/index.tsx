import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core"; // v1.x
import App from "./App";

import theme from "./theme";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

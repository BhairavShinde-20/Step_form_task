import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import Routing from "./Routing";
import StepContext from "./Component/StepContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <StepContext>
  <App/>
  </StepContext>
    

  </>
);

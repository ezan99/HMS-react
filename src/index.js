import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Dashboard from "./components/dashboard";

ReactDOM.render(
    <BrowserRouter>
        <Dashboard />
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();
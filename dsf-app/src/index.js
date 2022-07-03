import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalProvider } from "./contexts/GlobalContext";

import { App } from "./pages/Home";

import "./index.css";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>
);


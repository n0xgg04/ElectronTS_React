import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "./screens/home";
import "./stylesheet/style.scss";

const Index = () => {
    return (
        <div>
            <Home />
        </div>
    );
};

const _El = document.getElementById("root") as Element;
const root = createRoot(_El);
root.render(<Index />);

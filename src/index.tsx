import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./screens/home";

const Index = () => {
    return (
        <div>
            <Home />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));

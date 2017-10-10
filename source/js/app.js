import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Body from "./flux/views/Body/Body";

ReactDOM.render(
    <HashRouter>
        <Body/>
    </HashRouter>,
    document.getElementById('unipro-web-reports-app')
);
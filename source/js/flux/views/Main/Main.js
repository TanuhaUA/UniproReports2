import React from "react";
import { Switch, Route } from "react-router-dom";

import Reports from "../Reports/Reports";
import Second from "../Second/Second";
import Home from "../Home/Home";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main className="main">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/reports' component={Reports} />
                    <Route path='/second' component={Second} />
                </Switch>
            </main>
        )
    }
}

export default Main;
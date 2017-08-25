React = require("react")
ReactDOM = require("react-dom")
{ HashRouter } = require("react-router-dom")

App = require("./flux/App")

ReactDOM.render(`(
    <HashRouter>
        <App />
    </HashRouter>
)`, document.getElementById('unipro-web-reports-app'));
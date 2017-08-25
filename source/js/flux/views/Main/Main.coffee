React = require("react")
{ Switch, Route } = require("react-router-dom")

Reports = require("../Reports/Reports")
Second = require("../Second/Second")
Home = require("../Home/Home")

Main = React.createClass({
    render: ->
        return `(
            <main className="main">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/reports' component={Reports} />
                    <Route path='/second' component={Second} />
                </Switch>
            </main>
        )`
})

module.exports = Main
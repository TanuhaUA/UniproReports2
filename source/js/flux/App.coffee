React = require("react")
{ Route, Switch } = require("react-router-dom")

Header = require("./views/Header/Header")
Main = require('./views/Main/Main')
Second = require('./views/Second/Second')

App = React.createClass({
  render: ->
    return `(
        <div>
            <Header />
            <Main />
        </div>
    )`
})

module.exports = App
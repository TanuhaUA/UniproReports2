React = require("react")

{ Link } = require("react-router-dom")

Header = React.createClass({
  render: ->
    return `(
      <header className="header">
          <h3 className="header__title">Reports</h3>
          <nav className="menu">
              <ul className="menu__list">
                  <li className="menu__list-item"><Link className="menu__link" to="/">Home</Link></li>
                  <li className="menu__list-item"><Link className="menu__link" to="/reports">Reports</Link></li>
                  <li className="menu__list-item"><Link className="menu__link" to="/second">Second</Link></li>
              </ul>
          </nav>
      </header>
    )`
})

module.exports = Header
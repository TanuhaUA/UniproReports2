React = require("react")

{ Link } = require("react-router-dom")

Header = React.createClass({
  render: ->
    return `(
      <header className="header">
          <h3 className="header__title">First</h3>
          <nav className="menu">
              <ul className="menu__list">
                  <li className="menu__list-item"><Link className="menu__link menu__link_active" to="/" replace>Home</Link></li>
                  <li className="menu__list-item"><Link className="menu__link" to="/reports" replace>First</Link></li>
                  <li className="menu__list-item"><Link className="menu__link" to="/second" replace>Second</Link></li>
              </ul>
          </nav>
      </header>
    )`
})

module.exports = Header
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <header className="header">
         <h3 className="header__title">Title</h3>
         <nav className="menu">
           <ul className="menu__list">
             <li className="menu__list-item"><Link className="menu__link menu__link_active" to="/" replace>Home</Link></li>
             <li className="menu__list-item"><Link className="menu__link" to="/reports" replace>First</Link></li>
             <li className="menu__list-item"><Link className="menu__link" to="/second" replace>Second</Link></li>
           </ul>
         </nav>
       </header>
    )
  }
}

export default Header;
import React from "react";

import Header from "../Header/Header";
import Main from '../Main/Main';
import LoginPage from '../LoginPage/LoginPage';

import AuthorizationStore from "../../stores/AuthorizationStore";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    this.getState = this.getState.bind(this);
  }
  getState() {
    return {
      isUserAuthorized: AuthorizationStore.getAuthorizationState()
    }
  }

  render() {
    let content = (
        <LoginPage />
    );

    if (this.state.isUserAuthorized) {
      content = (
        <div>
          <Header />
          <Main />
        </div>
      );
    }

    return content;
  }
}


export default Body;
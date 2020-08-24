import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Button, FormField } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <div>
          {'Welcome to the Haravard Art API '}
        <Switch>
          <Link to="/GetAll">
            <button class="ui red button">All Works</button>
          </Link>
        </Switch>
        <Switch>
            <Link to="/PUTUpdate">
            </Link>
        </Switch>
      </div>
    );
  }
}
export default Home;

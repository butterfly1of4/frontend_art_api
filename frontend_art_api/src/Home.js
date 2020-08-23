import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Button } from 'semantic-ui-react'


class Home extends Component {
  render() {
    return (
    //   <Switch>
        <Link to="/AllArt">
          <button class="ui red button">All Works</button>
        </Link>
    //   </Switch>
    );
  }
}
export default Home;

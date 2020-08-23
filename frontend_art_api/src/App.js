import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Delete from "./Components/Delete";
import PUTUpdate from "./Components/PUTUpdate"
import Home from "../src/Home"

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const getAll = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const getOne = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};
const PUT = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
};
const post = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
const deleteOne = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: [],
    };
    this.setState = this.setState.bind(this);

    console.log(this.state.entry);
  }
  setData(entry) {
    this.setState({ entry: entry });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <h1>Harvard Art API</h1>
          </Link>
        </nav>
        <main>
          <Switch>
            <Home />
          <Route path="/getAll" exact  component={getAll} />
          <Route path="/Delete" exact component={Delete} />
          <Route path="/PUTUpdate" exact component={PUTUpdate} />
          </Switch>
        </main>
      </div> //main div
    ); //return
  } //render

  componentDidMount() {
    







    //   fetch(
  //     hostURL, getAll, deleteOne, getOne, put, post
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);

  //       let entry = res;
  //       console.log(entry);
  //       this.setState({
  //         entry: res,
  //       });
  //       console.log(entry);
  //       console.log(this.state.entry);
  //       return this.state.entry;
  //     });
  // }
  // componentDidUpdate() {
  //   console.log("the end");
  //   console.log(this.state.entry);
  }
}
export default App;

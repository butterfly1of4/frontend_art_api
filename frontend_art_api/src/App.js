import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Delete from "./Components/Delete";
import PUTUpdate from "./Components/PUTUpdate"
import Home from "../src/Home"
import ArtSeed from './Components/ArtSeed'

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const GetAll = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const GetOne = {
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
          <Route path="/GetAll" exact  component={GetAll} />
          <Route path="/Delete" exact component={Delete} />
          <Route path="/PUTUpdate" exact component={PUTUpdate} />
          </Switch>
        </main>
      </div> //main div
    ); //return
  } //render

  componentDidMount() {


  //     fetch(
  //     hostURL
  //     // , GetAll, deleteOne, GetOne, PUT, post
  //   )
  //     .then((res) => res.json())
  //     .then((readJson) => {
  //       console.log(readJson);
  //       // let entry = res;
  //       // console.log(entry);
  //       this.setState({
  //         entry: readJson.title
  //       });

  //     });
      
  // }
  // componentDidUpdate() {
  //   console.log("the end");
  //   console.log(this.state.entry);
  // }
}
}
export default App;

import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const getOne = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
class PUTUpdate extends Component {
  constructor() {
    super();
    this.state = {
      picture: [],
    };
  }
  componentWillMount() {
    fetch(hostURL, getOne)
      .then((res) => res.json())
      .then((picture) => thi.setState({ picture }))
      .then(console.logt(this.state.picture))
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let list = this.state.picture.map((item) => {
      if (item.title === this.props.match.params.title) {
        return (
          <React.Fragment>
            <form onSubmit={this.update}>
              <input typ="text" placeholder="Update Title"></input>
              <input type="submit"></input>
            </form>
          </React.Fragment>
        );
      } else {
          return null;
      }
    });
return <div>{pics}</div>
  }
  update = (e) => {
      e.preventDefault()
      console.dir(e.target[0].value)
      console.log(this.props.match.params.title)
      console.log(url + this.props.match.params.title)
      const inputData = {
          title: document.querySelector("input").value
      }
      const PUT = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData)
      }
      fetch(url + this.props.match.params.title, PUT)
      .then((res) => res.json())
      .then((picture) =>console.log(picture))
      .catch((err) => {
          console.log(err)
      })
      }



}
export default PUTUpdate;

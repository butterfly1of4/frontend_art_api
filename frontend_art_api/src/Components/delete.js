import React, { Component } from "react";
import "../App.css";
import { Route, Link, Redirect } from "react-router-dom";
const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";



//api host url import?

const deleteOne = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  class Delete extends Component {
      constructor(){
          super()
          this.state = {
              entry: [],
              onClick: true
          }
      }//constructor

      componentWillMount() {
        fetch(
          hostURL, deleteOne
        ).then((res) => {
            res.json()
        }).then((entry) => this.setState({entry}))
        .catch((err) => {
            console.log(err)
        })
     
        } //componentWillMount
  }
export default Delete
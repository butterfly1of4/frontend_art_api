import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record"

const getAll = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  class ArtSeed extends Component {
      constructor(){
          super()
          this.state = {
            title: String,
            classification: String,
            url: String,
            century: String,
            culture: String,
            medium: String,
          }
      }//constructor
      componentWillMount() {
        fetch(
          hostURL, getAll
        ).then((res) => {
            res.json()
        }).then((entry) => this.setState({entry}))
        .catch((err) => {
            console.log(err)
        })
     
        } //componentWillMount
      render(){
          return(<div></div>)
      }//render
  }//component
  export default ArtSeed
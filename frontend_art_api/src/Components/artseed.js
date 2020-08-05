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

          }
      }//constructor
      render(){
          return(<div></div>)
      }//render
  }//component
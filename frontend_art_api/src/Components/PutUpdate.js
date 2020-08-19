import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";


const getOne = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  class PudUpdate extends Component {
      constructor(){
          super()
          this.state ={
              picture: '',
              onclick: true
          }
      }
      componentWillMount(){
          fetch(hostURL, getOne)
          .then((res) => {
              res.json()
          }).then((picture) => this.setState({picture}))
          .catch((err) =>{
              console.log(err)
          } )
      }
  }
  export default PutUpdate
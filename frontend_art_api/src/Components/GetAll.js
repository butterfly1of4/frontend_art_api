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

class GetAll extends Component{
    constructor() {
        super()
        this.state={
            picture: []
        }
    }
    componentWillMount(){
        fetch(hostURL, GetAll)
        .then((res) => res.json())
        .then((picture) => this.setState({picture}))
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        let list = this.state.picture.map((item) => {
            return (
                <div className='container' key={item}>
                    <img src= {item.image} />
                </div>
            )
        })
        return (
            <React.Fragment>
                <div className="list">{list}</div>
            </React.Fragment>
        )
    } 
}
export default GetAll
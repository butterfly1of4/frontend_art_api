import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const GetAll = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};

class GetAll extends Component{
    constructor() {
        super()
        this.state={
            entry: []
        }
    }
    componentWillMount(){
        fetch(hostURL, GetAll)
        .then((res) => res.json())
        .then((entry) => this.setState({entry:list}))
        .catch((err) => {
            console.log(err)
        })
    console.log(entry, list)
    }
    render() {
        console.log(entry)
        let list = this.state.entry.map((item) => {
            return (
                <div>
                    <div className='entry' key={item}>
                        {item.entry}
                        consle.log(item.entry)
                    <div className="button">
                        <button onClick={(e) => {this.setState(list= item.entry)}}>
                            <img src= {item.entry} />
                            <Link to={''} />
                        </button>
                    </div>
                  
                    
                    </div>
                </div>
            
        )})
        console.log(list)
        return (
            // <React.Fragment>
                <div className="list">{list}</div>
            // </React.Fragment>
        )
    } 
}
export default GetAll
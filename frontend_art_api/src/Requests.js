import React from 'react';
import './App.css';
import './App.js'
import { Route, Link, Redirect } from "react-router-dom";
import Axios from 'axios';



const Get = {
	method: "GET",
	headers: {
		Accept: "data/json",
	},
};

const Put = {
	method: "PUT",
	headers: {
		Accept: "data/json",
	},
};
const Post = {
	method: "POST",
	headers: {
		Accept: "data/json",
	},
};
const Delete = {
	method: "DELETE",
	headers: {
		Accept: "data/json",
	},
};



export default Requests
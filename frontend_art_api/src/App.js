import React, {Component} from 'react';
import './App.css';
import { Route, Link, Redirect } from "react-router-dom";

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

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
      return(<div>
        <nav>
					<Link to='/'>
						<h1>Harvard Art API</h1>
					</Link>
				</nav>
				<main>

      
				</main>
        </div>
      )}
      componentDidMount() {
        fetch(hostURL
          // , getAll, deleteOne, getOne, put, post
          )
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
    
            let entry = res;
            console.log(entry);
            this.setState({
              entry: res,
            });
            console.log(entry);
            console.log(this.state.entry);
            return this.state.entry;
          });
      }
      componentDidUpdate() {
        console.log("the end");
        console.log(this.state.entry);
      }
}
export default App;

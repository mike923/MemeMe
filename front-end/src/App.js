import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Signup from './Components/Signup'
import Landing from './Components/Landing'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            hideLinks: false
        }
    }

    hideLink = () => {
        this.setState({
            hideLinks: true
        })
    }

    render() {
        let {
            state:{hideLinks},
            hideLink,
        } =    this

        return (
            <div className="App">
                <h1>Welcome to Meme Me</h1>
                <nav> 
                    <Link 
                        to="/login"
                        // onClick={hideLink}
                    >login</Link><br/>
                    <Link 
                        to="/signup"
                        // onClick={hideLink}
                    >signup</Link>
                </nav>
                <Switch>
                    <Route path="/login" component={Landing} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/" component={Signup} />
                    <Route path="/" component={Signup} />
                </Switch>
                {/* <Signup /> */}
            </div>
        );
    }
}

export default App;

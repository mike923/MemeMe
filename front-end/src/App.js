import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import test from './test'
import Signup from './Signup'
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
                <nav onClick={hideLink} hidden={hideLinks}>
                    <Link onClick={hideLink} to="/login">login</Link>- 
                    <Link onClick={hideLink} to="/signup">signup</Link>
                </nav>
                <Switch>
                    <Route path="/login" component={test} />
                    <Route path="/signup" component={test} />
                    <Route path="/" component={test} />
                    <Route path="/" component={test} />
                </Switch>
                <Signup />
            </div>
        );
    }
}

export default App;

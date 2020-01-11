import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Signup from './Components/Signup'
import Feed from './Components/Feed'
import UserProfile from './Components/UserProfile'
import Landing from './Components/Landing'
import PhotoUpload from './Components/PhotoUpload'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            hideLinks: false
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Welcome to Meme Me</h1>
                <nav> 
                    <Link 
                        to="/login"
                    >login</Link><br/>
                    <Link 
                        to="/signup"
                    >signup</Link><br/>
                    <Link 
                        to="/feed"
                    >feed</Link><br/>
                    <Link 
                        to="/photos/upload"
                    >upload</Link><br/>
                    <Link 
                        to="/user"
                    >user</Link>
                </nav>
                <Switch>
                    <Route path="/login" component={Landing} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/user" component={UserProfile} />
                    <Route path="/photos/upload" render={(props) => <PhotoUpload />} />
                </Switch>

            </div>
        );
    }
}

export default App;

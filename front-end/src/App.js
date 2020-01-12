import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Signup from './Components/Signup'
import Feed from './Components/Feed'
import UserProfile from './Components/UserProfile'
import Landing from './Components/Landing'
import PhotoUpload from './Components/PhotoUpload'
import Photo from './Components/Photo'
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userIdLoggedIn: 0,
        }
    }

    changeID = (id) => this.setState({userIdLoggedIn:id})

    render() {
        const {
            state:{userIdLoggedIn},
            changeID
        } = this
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
                        to="/photocomp"
                    >photo</Link><br/>
                    <Link 
                        to="/photos/upload"
                    >upload</Link><br/>
                    <Link 
                        to="/user"
                    >user</Link>
                </nav>
                <Switch>
                    <Route path="/login" 
                        render={() => <Landing changeID={changeID}/>} 
                    />
                    <Route path="/photocomp" 
                        render={() => <Photo userIdLoggedIn={userIdLoggedIn}/>} 
                    />
                    <Route path="/user" 
                        render={() => <UserProfile userIdLoggedIn={userIdLoggedIn}/>} 
                    />                    
                    <Route path="/signup" 
                        render={() => <Signup changeID={changeID}/>}
                    />
                    <Route path="/feed" 
                        render={()=> <Feed userIdLoggedIn={userIdLoggedIn}/>} 
                    /> 
                    <Route path="/photos/upload" 
                        render={() => <PhotoUpload userIdLoggedIn={userIdLoggedIn} />} 
                    />
                </Switch>

            </div>
        );
    }
}

export default App;

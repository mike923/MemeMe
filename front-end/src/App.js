import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import axios from 'axios'
import Post from './Components/Post'
import Feed from "./Components/Feed";
import Error from './Components/Error'
import Photo from './Components/Photo'
import LogOut from './Components/LogOut'
import Signup from "./Components/Signup";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import UserProfile from "./Components/UserProfile";
//import UserProfile from "./test/test_user_profile";
import PhotoUpload from "./Components/PhotoUpload";
import EditProfile from "./Components/EditProfile";
// import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIdLoggedIn: 0
        };
    }

    async componentDidMount() {
        const id = await sessionStorage.getItem('id')
        if(id === null) {
            console.log("id is null");
            sessionStorage.setItem('id', 0)
            return;
        }
        this.setState({ userIdLoggedIn: parseInt(id)})
    }


    changeID = id => {
        sessionStorage.setItem('id', id)
        this.setState({ userIdLoggedIn: id });
    } 

    render() {
        const {
            state: { userIdLoggedIn },
            changeID
        } = this;
        
        return (
            <div className="App">
                {/* <h1>Welcome to Meme Me</h1> */}
                {userIdLoggedIn ? <NavBar userIdLoggedIn={userIdLoggedIn} />: ''}

                {userIdLoggedIn ? (
                    <Switch>
                        <Route path="/post/:id" 
                            render={(props) => <Post id={props.match.params.id} userIdLoggedIn={userIdLoggedIn}/>} 
                        />
                        <Route path="/EditProfile"
                            render={() => <EditProfile userIdLoggedIn={userIdLoggedIn} />}
                        />
                        <Route path="/photocomp" 
                            render={() => <Photo userIdLoggedIn={userIdLoggedIn}/>} 
                        />
                        <Route path="/user/:username" 
                            render={(props) => <UserProfile username={props.match.params.username} userIdLoggedIn={userIdLoggedIn}/>} 
                        />
                        <Route path="/user" 
                            render={(props) => <UserProfile userIdLoggedIn={userIdLoggedIn}/>} 
                        />
                        <Route path="/feed" 
                            render={()=> <Feed userIdLoggedIn={userIdLoggedIn}/>} 
                        />
                        <Route path="/photos/upload" 
                            render={() => <PhotoUpload userIdLoggedIn={userIdLoggedIn} />} 
                        />
                        <Route path="/LogOut"
                            render={() => <LogOut userIdLoggedIn={userIdLoggedIn} changeID={changeID} />}
                        />
                        <Route path="*" 
                            render={() => <Error />} 
                        />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/signup" 
                            render={() => <Signup changeID={changeID}/>}
                        />
                        <Route path="/login" 
                            render={() => <Landing changeID={changeID}/>} 
                        />
                        <Route path="*" 
                            render={() => <Landing changeID={changeID}/>} 
                        />
                    </Switch>
                )}
            </div>
        );
    }
}

export default App;

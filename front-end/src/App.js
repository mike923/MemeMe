import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Feed from "./Components/Feed";
import UserProfile from "./Components/UserProfile";
import Landing from "./Components/Landing";
import PhotoUpload from "./Components/PhotoUpload";
import Photo from './Components/Photo'
import "./App.css";
import EditProfile from "./Components/EditProfile";
import NavBar from "./Components/NavBar";
import LogOut from './Components/LogOut'



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
        <h1>Welcome to Meme Me</h1>
        <NavBar loggedIn = {userIdLoggedIn }/>

        {userIdLoggedIn ? (
          <Switch>
            {/* <Route path="/photocomp" 
                        render={() => <Photo userIdLoggedIn={userIdLoggedIn}/>} 
                    /> */}
            <Route
              path="/user"
              render={() => <UserProfile userIdLoggedIn={userIdLoggedIn} />}
            />
            <Route
              path="/signup"
              render={() => <Signup changeID={changeID} />}
            />
            <Route
              path="/feed"
              render={() => <Feed userIdLoggedIn={userIdLoggedIn} />}
            />
            <Route
              path="/photos/upload"
              render={() => <PhotoUpload userIdLoggedIn={userIdLoggedIn} />}
            />
            <Route
              path="/EditProfile"
              render={() => <EditProfile userIdLoggedIn={userIdLoggedIn} />}
            />
             <Route
              path="/LogOut"
              render={() => <LogOut userIdLoggedIn={userIdLoggedIn}
              changeID={changeID} />}
            />
          </Switch>
        ) : (
          <Switch>
            <Route
              path="/login"
              render={() => <Landing changeID={changeID} />}
            />
            <Route
              path="/signup"
              render={() => <Signup changeID={changeID} />}
            />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;

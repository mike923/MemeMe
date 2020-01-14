import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Feed from './Components/Feed'
import Post from './Components/Post'
import Error from './Components/Error'
import Photo from './Components/Photo'
import Signup from './Components/Signup'
import Landing from './Components/Landing'
import UserProfile from './Components/UserProfile'
import PhotoUpload from './Components/PhotoUpload'
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userIdLoggedIn: 0,
        }
    }

    componentDidMount = async () => {
        let {data:{session}} = await axios.get('http://localhost:3001/sessions/')
        this.setState({userIdLoggedIn: session[0].id})
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
                    <Link to="/login">login</Link><br/>
                    <Link to="/signup">signup</Link><br/>
                    <Link to="/feed">feed</Link><br/>
                    <Link to="/post">post</Link><br/>
                    <Link to="/photocomp">photo</Link><br/>
                    <Link to="/photos/upload">upload</Link><br/>
                    <Link to="/user">user</Link>
                </nav>
                <Switch>
                    <Route path="/login" 
                        render={() => <Landing userIdLoggedIn={userIdLoggedIn} changeID={changeID}/>} 
                    />
                    <Route path="/post" 
                        render={() => <Post userIdLoggedIn={userIdLoggedIn}/>} 
                    />
                    <Route path="/photocomp" 
                        render={() => <Photo userIdLoggedIn={userIdLoggedIn}/>} 
                    />
                    <Route path="/user" 
                        render={() => <UserProfile userIdLoggedIn={userIdLoggedIn}/>} 
                    />                    
                    <Route path="/signup" 
                        render={() => <Signup userIdLoggedIn={userIdLoggedIn} changeID={changeID}/>}
                    />
                    <Route path="/feed" 
                        render={()=> <Feed userIdLoggedIn={userIdLoggedIn}/>} 
                    /> 
                    <Route path="/photos/upload" 
                        render={() => <PhotoUpload userIdLoggedIn={userIdLoggedIn} />} 
                    />
                    <Route path="*" 
                        render={() => <Error />} 
                    />
                </Switch>

            </div>
        );
    }
}

export default App;

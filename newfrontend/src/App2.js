import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import Landing from './Components/Landing'
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
                    <Link to="/login">login</Link><br/>
                    <Link to="/signup">signup</Link><br/>
                    <Link to="/feed">feed</Link><br/>
                    <Link to="/post">post</Link><br/>
                    <Link to="/photocomp">photo</Link><br/>
                    <Link to="/photos/upload">upload</Link><br/>
                    {/* <Link to="/user">user</Link> */}
                </nav>
                <Landing changeID={changeID}/>
            </div>
        );
    }
}

export default App;

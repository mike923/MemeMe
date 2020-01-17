import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import axios from "axios";
// import "../CSS/Landing.css";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            user_password: "",
            redirect: false,
            LoggedIn: false,
            error: false
        };
    }

    changeID = this.props.changeID;

    submitForm = async event => {
        event.preventDefault();

        let {email, user_password} = this.state

    try{
        let {data: {user}} = await axios.post("http://localhost:3001/users/specific/active", {email, user_password});
        console.log(user)
        this.setState({redirect: true});
        this.changeID(user.id);
    }catch(error){
        console.log(error, 'axios not working')
        this.setState({error:true})
    }
};

    handleInput = ({ target: { name, value } }) => this.setState({ [name]: value });

    render() {
        let {
            state: { email, user_password, redirect, error },
            submitForm,
            handleInput
        } = this;


        if (redirect) return <Redirect to='/feed' />
        return (
            <form onSubmit={submitForm} className = 'box'>
                <h2>Welcome to Meme Me</h2>
                <h3 hidden={!error}>Username and password combination did not match anything in our system. <br/>Please try again.</h3>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInput}
                    placeholder="email@domain.org"
                />
                <input
                    type="password"
                    name="user_password"
                    value={user_password}
                    onChange={handleInput}
                    placeholder="password"
                />
                <button type="submit">Log In</button>
                <Link className='link' to='/signup'>
                    New to Meme Me?
                    <br />
                    Sign Up here.
                </Link>
            </form>
        )
    }

}

export default Landing;

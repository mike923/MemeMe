import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            bio: '',
            email: '',
            firstname: '',
            displayname: '',
            user_password: '',
            redirect: false,
            loggedIn: this.props.userIdLoggedIn,
        }
        this.state = this.initialState
    }
    
    changeID = this.props.changeID
    
    submitForm = async (event) => {
        event.preventDefault(); 
        
        let {bio, email, firstname, displayname, user_password} = this.state
        let payload = {
            bio, 
            email, 
            firstname, 
            displayname, 
            user_password,
        }
        
        try {
            let {data} = await Axios.post('http://localhost:3001/users/signup', payload)
            console.log(data)
            console.log('user id', data.id)
            this.changeID(data.id)
            this.setState({redirect:true})
        } catch(error) {
            console.log(error)
        }
        
        
    }
    
    handleInput = ({target: {name, value}}) => this.setState({ [name]: value })
    
    render() {
        
        let {
            state: {
                bio,
                email,
                firstname, 
                displayname, 
                user_password,
                redirect,
                loggedIn,
            },
            submitForm,
            handleInput,
        } = this
        
        if (loggedIn) return(<Redirect to='/feed' />)
        return (
          <form onSubmit={submitForm}>
            <h2>Sign-Up for Meme Me</h2>
            {/* <label htmlFor="email">email: </label> */}
            <input
              type="email"
              name="email"
              placeholder="email@domain.org"
              value={email}
              onChange={handleInput}
            />
            {/* <label htmlFor="displayname">displayname: </label> */}
            <input
              type="text"
              name="displayname"
              placeholder="displayname"
              value={displayname}
              onChange={handleInput}
            />
            {/* <label htmlFor="user_password">password: </label> */}
            <input
              type="password"
              name="user_password"
              placeholder="password"
              value={user_password}
              onChange={handleInput}
            />
            {/* <label htmlFor="firstname">full name: </label> */}
            <input
              type="text"
              name="firstname"
              placeholder="Name"
              value={firstname}
              onChange={handleInput}
            />
            {/* <label htmlFor="bio">bio: </label> */}
            <textarea
              type="text"
              name="bio"
              placeholder="Tell us about yourself"
              value={bio}
              onChange={handleInput}
            ></textarea>
            <button type="submit">Sign Up</button>
            <Link className="link" to="./login">
              Already have an account?
              <br />
              Log In here.
            </Link>
          </form>
        );
    }
}

export default Signup
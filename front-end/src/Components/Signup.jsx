import React, { Component } from 'react'


class Signup extends Component {
    constructor() {
        super()
        this.initialState = {
            bio: '',
            email: '',
            password: '',
            fullName: '',
            username: '',
        }
        this.state = this.initialState
    }

    // submitForm is the function used to handle the onSubmit event for the form in the render 
    submitForm = (event) => {
        event.preventDefault();

        console.log(event.target)
        console.log(this.state)
        console.log('here would go our network request to create a new user')
    }

    // handleInput is the function responsible for updating the state everytime user presses a key
    handleInput = ({target: {id, value}}) => this.setState({ [id]: value })

    render() {
        let {
            state: {
                bio,
                email,
                password,
                fullName, 
                username, 
            },
            submitForm,
            handleInput,
        } = this

        return(
            
            <form onSubmit={submitForm}>
                <h1>Sign-Up for Meme Me</h1>
                <label for="email">email: </label>
                <input 
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInput}
                    placeholder="email@domain.org"
                /><br/>
                <label for="username">username: </label>
                <input 
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    // pattern=
                    onChange={handleInput}
                    placeholder="username"
                /><br/>
                <label for="password">password: </label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInput}
                    placeholder="password"
                /><br/>
                <label for="fullName">full name: </label>
                <input 
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={handleInput}
                    placeholder="Name"
                /><br/>
                <label for="bio">bio: </label>
                <input 
                    id="bio"
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={handleInput}
                    placeholder="Tell us about yourself"
                /><br/>
                <button type="submit">Sign Up</button>
            </form>

        )
    }
}

export default Signup
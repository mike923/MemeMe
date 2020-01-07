import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
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
                email,
                password,
            },
            submitForm,
            handleInput,
        } = this

        return (
            <form>
                <h2>Landing page</h2>
                <label htmlFor="email">email: </label>
                <input 
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInput}
                    placeholder="email@domain.org"
                /><br/>
                <label htmlFor="password">password: </label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInput}
                    placeholder="password"
                /><br/>
                <button type="submit">Log In</button><br/><br/>
                <Link to='./signup'>New to Meme Me?<br/>Sign Up here.</Link>
            </form>
        )
    }
}


export default Landing
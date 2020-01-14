import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import axios from 'axios'


class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false,
            LoggedIn: false,
        }
    }

    changeID = this.props.changeID;

    submitForm = async (event) => {
        event.preventDefault();

        let loginURL = 'http://localhost:3001/sessions'
        try {
            let response = await axios.post(loginURL, { email: this.state.email, user_password: this.state.password })
            console.log(response)
            this.changeID(response.data.user.id)
            this.setState({redirect: true})
        } catch (error) {
            console.log(error, 'axios not working')
        }
    }

    handleInput = ({ target: { id, value } }) => this.setState({ [id]: value })

    render() {
        let {
            state: {
                email,
                password,
                redirect,
            },
            submitForm,
            handleInput,
        } = this

        if (redirect) return <Redirect to='/feed' />
        return (
            <form onSubmit={submitForm}>
                <h2>Landing page</h2>
                <label htmlFor="email">email: </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInput}
                    placeholder="email@domain.org"
                /><br />
                <label htmlFor="password">password: </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInput}
                    placeholder="password"
                /><br />
                <button type="submit">Log In</button><br /><br />
                <Link to='./signup'>New to Meme Me?<br />Sign Up here.</Link>
            </form>
        )
    }
}


export default Landing;

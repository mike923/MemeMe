import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'



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


  

    // handleInput is the function responsible for updating the state everytime user presses a key
    handleInput = ({target: {name, value}}) => this.setState({ [name]: value })

    render() {
        
        let {
            state: {
                bio,
                email,
                firstname, 
                displayname, 
                user_password,
                redirect
            },
            submitForm,
            handleInput,
        } = this
        
        if (redirect) return(<Redirect to='/feed'/>)
        return(
            
            <form onSubmit={submitForm}>
                <h1>Sign-Up for Meme Me</h1>
                <label htmlFor="email">email: </label>
                <input 
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInput}
                    placeholder="email@domain.org"
                /><br/>
                <label htmlFor="displayname">displayname: </label>
                <input 
                    id="displayname"
                    type="text"
                    name="displayname"
                    value={displayname}
                    // pattern=
                    onChange={handleInput}
                    placeholder="displayname"
                /><br/>
                <label htmlFor="user_password">password: </label>
                <input 
                    id="user_password"
                    type="password"
                    name="user_password"
                    value={user_password}
                    onChange={handleInput}
                    placeholder="password"
                /><br/>
                <label htmlFor="firstname">full name: </label>
                <input 
                    id="firstname"
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={handleInput}
                    placeholder="Name"
                /><br/>
                <label htmlFor="bio">bio: </label>
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
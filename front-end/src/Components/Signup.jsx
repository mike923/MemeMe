import React, { Component } from 'react'
import Axios from 'axios'



class Signup extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            bio: '',
            email: '',
            firstname: '',
            displayname: '',
            user_password: '',
        }
        this.state = this.initialState
    }

    changeID = this.props.changeID

    // submitForm is the function used to handle the onSubmit event for the form in the render 
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

           console.log(this.props.userIdLoggedIn)
          
          
           console.log('user id', data.id)
           
              this.changeID(data.id)
           //    this.props.changeID = (id) => this.setState({userIdLoggedIn:id})

         
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
            },
            submitForm,
            handleInput,
        } = this

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
import React, { Component } from 'react'
import axios from 'axios'
import {withRouter, Redirect} from 'react-router-dom'

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            id: this.props.userIdLoggedIn,
            bio: 'this is my bio its not much but it will be soon.',
            firstname: 'firstname',
            displayname: 'displayname',
            profilepic: 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png',
        }
        this.state = this.initialState
    }

    componentDidMount = async () => {
        let { data: { user } } = await axios.get(`http://localhost:3001/users/${this.state.id}`)
        this.setState(user)
    }
    
    handleSubmit = async (event) => {
        event.preventDefault(); 
        
        let {id, bio, email, firstname, displayname, user_password} = this.state
        let payload = {bio, email, firstname, displayname, user_password}
        const data = new FormData()
        data.append('imgURL', this.state.imageFile)
        
        try {
            let {data} = await axios.patch(`http://localhost:3001/users/${id}`, payload)
            this.setState({ redirect: true })
        } catch(error) {
            console.log('user patch error:', error)
        }   
        
        try{
            const {data: {payload}} = await axios.patch(`http://localhost:3001/users/upload/${id}`, data)
            this.setState ({ profilepic: payload })
        } catch(error) {
            console.log('profile pic change error:', error)
        }
    }
    
    handleFileInput = ({target: {files}}) => this.setState ({ imageFile: files[0] })

    handleInput = ({target: {name, value}}) => this.setState({ [name]: value })

    render() {
        const {
            state: { 
                bio, 
                email, 
                redirect, 
                firstname, 
                profilepic, 
                displayname, 
                user_password, 
            },
            handleInput,
            handleSubmit,
            handleFileInput,
        } = this

        if (redirect) return (<Redirect to='/user' />)
        return (
            <form onSubmit={handleSubmit}>
                <img src={profilepic} alt="profile picture" height="150px" />
                <input 
                    onChange={handleInput} 
                    type='text' 
                    name="email" 
                    placeholder="email" 
                    value={email}  
                />
                <input 
                    onChange={handleInput} 
                    type='password' 
                    name="user_password" 
                    placeholder="user_password" 
                    value={user_password}  
                />
                <input 
                    onChange={handleInput} 
                    type='text' 
                    name="displayname" 
                    placeholder="displayname" 
                    value={displayname}  
                />
                <input 
                    onChange={handleInput} 
                    type='text' 
                    name="firstname" 
                    placeholder="firstname" 
                    value={firstname}  
                />
                <input 
                    onChange={handleInput} 
                    type='text' 
                    name="bio" 
                    placeholder="bio" 
                    value={bio}  
                />
                <input type='file' name='profiePic' onChange={handleFileInput} />
                <button type='submit' >Save</button>
            </form>
        )
    }

}

export default withRouter(EditProfile);
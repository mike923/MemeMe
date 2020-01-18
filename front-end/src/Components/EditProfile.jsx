import React, { Component } from 'react'
import axios from 'axios'
import {withRouter, Redirect} from 'react-router-dom'

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            id: this.props.userIdLoggedIn,
            bio: 'this is my bio its not much but it will be soon.',
            email: 'email@domain.org',
            firstname: 'firstname',
            displayname: 'displayname',
            user_password: 'Password',
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
        return (<>
            <div className="container">
                <div className="row">
                    <img src={profilepic} className='responsive-image' alt="profile picture" height="150px" />
                    <form className="col s12 offset-s2" id="reg-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col s8">
                                <input
                                    type="text"
                                    id="displayname"
                                    name="displayname"
                                    value={displayname}
                                    onChange={handleInput}
                                    autoFocus='true'
                                    className="validate"
                                    required
                                />
                                <label htmlFor="displayname">Username </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={firstname}
                                    onChange={handleInput}
                                    autoFocus='true'
                                    className="validate"
                                    required
                                />
                                <label htmlFor="firstname">Full Name </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInput}
                                    autoFocus='true'
                                    className="validate"
                                    required
                                />
                                <label htmlFor="email">Email </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <input
                                    type="password"
                                    id="user_password"
                                    name="user_password"
                                    value={user_password}
                                    onChange={handleInput}
                                    autoFocus='true'
                                    className="validate"
                                    required
                                />
                                <label htmlFor="user_password">Password </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <textarea
                                    type="text"
                                    id="bio"
                                    name="bio"
                                    value={bio}
                                    onChange={handleInput}
                                    autoFocus='true'
                                    className="materialize-textarea"
                                ></textarea>
                                <label htmlFor="bio">Tell Us About Yourself </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='file-field input-field col s8'>
                                <div className='btn'>
                                    <span> Profile Picture </span> 
                                    <input type ='file' onChange={this.handleFileInput} />
                                </div>
                                <div className = 'file-path-wrapper'>
                                    <input className = 'file-path validate' placeholder='profile_picture.jpeg' type = 'text' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <button className="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Save
                                    <i className="material-icons right">done</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>);
    }

}

export default withRouter(EditProfile);
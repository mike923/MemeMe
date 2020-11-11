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
        return (<>
            <div className="container">
                <div className="row">
                    <form className="col s12" id="reg-form" onSubmit={submitForm}>
                        <h2>Sign-Up for Meme Me</h2>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    type="text"
                                    id="displayname"
                                    name="displayname"
                                    value={displayname}
                                    onChange={handleInput}
                                    className="validate"
                                    required
                                />
                                <label htmlFor="displayname">Username </label>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={firstname}
                                    onChange={handleInput}
                                    className="validate"
                                    required
                                />
                                <label htmlFor="firstname">Full Name </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInput}
                                    className="validate"
                                    required
                                    />
                                <label htmlFor="email">Email </label>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    type="password"
                                    id="user_password"
                                    name="user_password"
                                    value={user_password}
                                    onChange={handleInput}
                                    className="validate"
                                    required
                                />
                                <label htmlFor="user_password">Password </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    type="text"
                                    id="bio"
                                    name="bio"
                                    value={bio}
                                    onChange={handleInput}
                                    className="materialize-textarea"
                                    required
                                ></textarea>
                                <label htmlFor="bio">Tell Us About Yourself </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <Link className='buttonlink' to="/login" style={{color:'white'}}>
                                    <button className="btn btn-large btn-register waves-effect waves-light" type="button" name="action">
                                        Already have an account?
                                        <br />
                                        Log In here.
                                    </button>
                                </Link>
                            </div>
                            <div className="input-field col s6">
                                <button className="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
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

export default Signup
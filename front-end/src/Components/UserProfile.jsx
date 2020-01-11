import React, { Component } from 'react'
import axios from 'axios'


class UserProfile extends Component {
    constructor() {
        super()
        this.initialState = {
            id: 1,
            bio: 'this is my bio its not much but it will be soon.',
            firstname: 'firstname',
            displayname: 'displayname',
            profilepic: 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png',
            profilePicAlt: 'profile picture',
        }
        this.state = this.initialState
    }

    componentDidMount = async (id = 2) => {
        let {data: {user}} = await axios.get(`http://localhost:3001/users/${id}`)
        let {data: {payload}} = await axios.get(`http://localhost:3001/photos/user/${id}`)
        console.log(user)
        console.log(payload)
        // await this.getPhotos()
        this.setState(user)
    }

    // getPhotos = async (id = 2) => {
    //     console.log(id)
    //     // this.setState({
    //     //     id: 2
    //     // })
    // }
    
    render() {
        let {
            state: {
                bio,
                displayname,
                firstname,
                profilePicAlt,
                profilepic,
            },
        } = this

        return(
            <div>
                <div>
                    <h2>{displayname}</h2>
                    <img src={profilepic} alt={profilePicAlt} height="150px"/>
                    <h3>{firstname}</h3>
                    <p>{bio}</p>
                </div>
                <div>
                    <h3>My photos go here</h3>
                    <div>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                    </div>
                    <div>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                    </div>
                    <div>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                    </div>
                    <div>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                        <img src={profilepic} alt={profilePicAlt} height="150px"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
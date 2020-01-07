import React, { Component } from 'react'

class UserProfile extends Component {
    constructor() {
        super()
        this.initialState = {
            bio: 'this is my bio its not much but it will be soon.',
            fullname: 'fullname',
            username: 'username',
            profilePicUrl: 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png',
            profilePicAlt: 'profile picture',
        }
        this.state = this.initialState
    }



    render() {
        let {
            state: {
                bio,
                username,
                fullname,
                profilePicAlt,
                profilePicUrl,
            },
        } = this

        return(
            <div>
                <div>
                    <h2>{username}</h2>
                    <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                    <h3>{fullname}</h3>
                    <p>{bio}</p>
                </div>
                <div>
                    <h3>My photos go here</h3>
                    <div>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                    </div>
                    <div>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                    </div>
                    <div>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                    </div>
                    <div>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                        <img src={profilePicUrl} alt={profilePicAlt} height="150px"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
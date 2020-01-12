import React, { Component } from 'react'
import Photo from '../Components/Photo.jsx'
import axios from 'axios'


class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            id: this.props.userIdLoggedIn,
            bio: 'this is my bio its not much but it will be soon.',
            firstname: 'firstname',
            displayname: 'displayname',
            profilepic: 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png',
            profilePicAlt: 'profile picture',
            photos: []
        }
        this.state = this.initialState
    }


    componentDidMount = async () => {
        let {id} = this.state
        let {data: {user}} = await axios.get(`http://localhost:3001/users/${id}`)
        let {data: {payload}} = await axios.get(`http://localhost:3001/photos/user/${id}`)
        console.log(user)
        console.log(payload)
        await this.getPhotos()
        this.setState(user)
    }

    getPhotos = async () => {
        let {data: {payload}} = await axios.get(`http://localhost:3001/photos/user/${this.state.id}`)
        console.log(payload)
        this.setState({
            photos: payload 
        })
        
        // console.log(id)
        // this.setState({
        //     id: 2
        // })
    }
    
    render() {
        let {
            state: {
                bio,
                displayname,
                firstname,
                profilePicAlt,
                profilepic,
                photos,
                userPhotoArray,
            },
        } = this
        // const userFeed = userPhotoArray.map(img => {
        //     console.log(img)
        //     return (
        //         <Photo 
        //             url={img.picture_url}
        //             photo_id={img.id}
        //             poster_id= {img.poster_id}
        //             date_posted= {img.date_posted}
        //         />
        //     )
        // })
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
                        {photos.map((photo) => <Photo photo_id={photo.id} url={photo.picture_url} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
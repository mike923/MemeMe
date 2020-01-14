import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            id: this.props.userIdLoggedIn,
            bio: 'this is my bio its not much but it will be soon.',
            firstname: 'firstname',
            displayname: 'displayname',
            profilepic: 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png',
            profilePicAlt: 'profile picture',
            editTitle: false,
            editfirstname: false, 
            editBio: false
        }
        this.state = this.initialState
    }


    componentDidMount = async () => {
        let { id } = this.state
        let { data: { user } } = await axios.get(`http://localhost:3001/users/${id}`)
        let { data: { payload } } = await axios.get(`http://localhost:3001/photos/user/${id}`)
        console.log(user)
        console.log(payload)
        // await this.getPhotos()
        this.setState(user)
    }





    handleTitleEdit = async (e) => {
        this.setState({ editTitle: true })
    }

    changeName = async (e) => {
        this.setState({ displayname: e.target.value })

    }

    handleDisplayname = async (e) => {
        const { id, displayname } = this.state
        try {
            let response = await axios.patch(`http://localhost:3001/users/${id}`, { displayname })
            this.setState({
                editTitle: false
            })
        } catch (error) {
            console.log(error)
        }

    }

    handlefirstnameEdit = async (e) => {
        this.setState({ editfirstname: true })
    }

    changefirstname = async (e) => {
        this.setState({ firstname: e.target.value })

    }

    handlefirstname = async (e) => {
        const { id, firstname } = this.state
        try {
            let response = await axios.patch(`http://localhost:3001/users/${id}`, { firstname })
            this.setState({
                editfirstname: false
            })
        } catch (error) {
            console.log(error)
        }

    }


    handleBioEdit = async (e) => {
        this.setState({ editBio: true })
    }

    changeBio= async (e) => {
        this.setState({ bio: e.target.value })

    }

    handleBio = async (e) => {
        const { id, bio } = this.state
        try {
            let response = await axios.patch(`http://localhost:3001/users/${id}`, { bio })
            this.setState({
                editBio: false
            })
        } catch (error) {
            console.log(error)
        }

    }

    DoneEditing = async  event => {
        console.log(event.target.value, "pressing edit button");
        // window.location.href= "/EditProfile"
        this.props.history.push("/user");
        //return <Redirect to="/EditProfile" />;
      };
    


    render() {
        const {
            state: {
                bio,
                displayname,
                firstname,
                profilePicAlt,
                profilepic,
                editTitle,
                editfirstname,
                editBio
            },
        } = this

        return (
            <div>
                <div>
                    {editTitle ? <input value={displayname} onChange={this.changeName} /> :
                        <h2>{displayname} </h2>
                    }

                    {editTitle ? <a onClick={this.handleDisplayname}> ✅</a> :
                        <a href= '#' onClick={this.handleTitleEdit}>📝</a>
                    }



                    <img src={profilepic} alt={profilePicAlt} height="150px" />

                    {editfirstname ? <input value={firstname} onChange={this.changefirstname} /> :
                        <h2>{firstname} </h2>
                    }

                    {editfirstname ? <a onClick={this.handlefirstname}> ✅ </a> :
                        <a href ='#' onClick={this.handlefirstnameEdit}>📝</a>
                    }

                    {editBio ? <input value={bio} onChange={this.changeBio} /> :
                        <p>{bio} </p>
                    }

                    {editBio ? <a onClick={this.handleBio}> ✅ </a> :
                        <a href ='#' onClick={this.handleBioEdit}>📝</a>
                    }








                    <button onClick={this.DoneEditing}> Done Editing</button>
                    <form onSubmit={this.handleSubmit} >
                        <input type='file' onChange={this.handleFileInput} />
                        <input type='submit' value='Upload' />
                    </form>
                </div>
                <div>


                </div>
            </div>
        )
    }
}

export default withRouter(EditProfile);
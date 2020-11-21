import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Photo from "../Components/Photo.jsx";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import PhotoUpload from "./PhotoUpload.jsx";
import SubFeed from "./SubFeed.jsx";
import url from '../apiURL'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            user: {
                id: sessionStorage.getItem('id'),
                bio: "this is my bio its not much but it will be soon.",
                firstname: "firstname",
                displayname: "displayname",
                profilepic: "https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png",
            },
            profilePicAlt: "profile picture",
            photos: [],
            loggedIn: this.props.userIdLoggedIn,
            location: this.props.location,
            username: this.props.username
        };
        this.state = this.initialState;
    }

    componentDidMount = async () => {
        let { user:{id}, username } = this.state;
        console.log('componentDidMount', username, id)
        
        let param = username && username !== '<empty string>' ? 'name/' + username : id
        try {
            let {data: { user }} = await axios.get(`${url}/users/${param}`);
            console.log(user);
            if (user) this.setState({user});
            else this.setState({
                username: '',
                user: {id: sessionStorage.getItem('id'),}
            })
            
            await this.getPhotos(user.id);
        } catch(error) {
            let {data: { user }} = await axios.get(`${url}/users/${id}`);
            console.log('there was an error retieving user profile', error, id, sessionStorage.getItem('id'))
            this.setState({user})
            this.getPhotos(user.id);
        }
        try {
            let {data: { payload }} = await axios.get(`${url}/photos/user/${id}`);
            // this.getPhotos(this.state.id);
            // this.setState({ photos: payload });
            console.log(payload);
        } catch(error) {
            console.log('Im not sure whats going on here')
        }
    };
    
    componentDidUpdate = async (prevProps, prevState) => {
        
    }

    getPhotos = async (id) => {
        try {
            let {
                data: { payload }
            } = await axios.get(`${url}/photos/user/${id}`);
            this.setState({ photos: payload });
        } catch (error) {
            console.log("There was an error retieving user photos");
        }
    };

    render() {
        let {
            state: {
                user:{
                    bio,
                    firstname,
                    profilepic,
                    displayname,
                },
                photos,
                loggedIn,
                profilePicAlt,
                location
            }
        } = this;


        if (!loggedIn) return <Redirect to="/login" />;
        return (
            <div className="container">
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            <br/>





                <div className="col s12 m7">
                    <h2 className="header"> {displayname}</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={profilepic} alt={profilePicAlt} height="200px" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h5>{firstname}</h5>
                                <p> {bio}</p>
                            </div>
                            <div className="card-action">
                                <Link to="/EditProfile"> Edit Profile </Link>
                                <Link to="/photos/upload"> Upload Photo </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>My photos go here</h3>
                <SubFeed photos={photos} delPost={true} />
            </div>
        );
    }
}

export default withRouter(UserProfile);

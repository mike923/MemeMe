import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Photo from "../Components/Photo.jsx";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import PhotoUpload from "./PhotoUpload.jsx";
import SubFeed from "./SubFeed.jsx";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: this.props.userIdLoggedIn,
      bio: "this is my bio its not much but it will be soon.",
      firstname: "firstname",
      displayname: "displayname",
      profilepic:
        "https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png",
      profilePicAlt: "profile picture",
      photos: [],
      loggedIn: this.props.userIdLoggedIn
    };
    this.state = this.initialState;
  }

  componentDidMount = async () => {
    let { id } = this.state;
    let {
      data: { user }
    } = await axios.get(`http://localhost:3001/users/${id}`);
    let {
      data: { payload }
    } = await axios.get(`http://localhost:3001/photos/user/${id}`);
    console.log(user);
    console.log(payload);
    await this.getPhotos();
    this.setState(user);
  };

  getPhotos = async () => {
    try {
      let {
        data: { payload }
      } = await axios.get(`http://localhost:3001/photos/user/${this.state.id}`);
      this.setState({ photos: payload });
    } catch (error) {
      console.log("There was an error retieving user photos");
    }
  };

  render() {
    let {
      state: {
        bio,
        photos,
        loggedIn,
        firstname,
        profilepic,
        displayname,
        profilePicAlt
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

import React, { Component } from "react";
import axios from "axios";
import EditProfile from "./EditProfile";
import { withRouter} from 'react-router-dom'


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
      profilePicAlt: "profile picture"
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
    // await this.getPhotos()
    this.setState(user);
  };

  // getPhotos = async (id = 2) => {
  //     console.log(id)
  //     // this.setState({
  //     //     id: 2
  //     // })
  // }

  handleEdit = async  event => {
    console.log(event.target.value, "pressing edit button");
    // window.location.href= "/EditProfile"
    this.props.history.push("/EditProfile");
    //return <Redirect to="/EditProfile" />;
  };

  render() {
    let {
      state: { bio, displayname, firstname, profilePicAlt, profilepic }
    } = this;

    return (
      <div>
        <div>
          <h2>{displayname}</h2>
          <img src={profilepic} alt={profilePicAlt} height="150px" />
          <h3>{firstname}</h3>
          <p>{bio}</p>
          <button onClick={this.handleEdit}> Edit Profile</button>
        </div>
        <div>
          <h3>My photos go here</h3>
          <div>
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
          </div>
          <div>
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
          </div>
          <div>
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
          </div>
          <div>
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
            <img src={profilepic} alt={profilePicAlt} height="150px" />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import axios from "axios";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      LoggedIn: false
    };
  }

  changeID = this.props.changeID;

  // submitForm is the function used to handle the onSubmit event for the form in the render
  submitForm = async event => {
    event.preventDefault();

    let loginURL = "http://localhost:3001/sessions";
    try {
      let response = await axios.post(loginURL, {
        email: this.state.email,
        user_password: this.state.password
      });
      console.log(response);
      this.setState({ LoggedIn: true });
      this.changeID(response.data.user.id);
     
    } catch (error) {
      console.log(error, "axios not working");
    }
  };



  // handleInput is the function responsible for updating the state everytime user presses a key
  handleInput = ({ target: { id, value } }) => this.setState({ [id]: value });



  render() {

    let {
      state: { email, password, LoggedIn },
      submitForm,
      handleInput
    } = this;

    if (LoggedIn) return <Redirect to="/feed" />;
    return (
      <form onSubmit={submitForm}>
        <h2>Landing page</h2>
        <label htmlFor="email">email: </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="email@domain.org"
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          placeholder="password"
        />
        <br />

        <button type="submit">Log In</button>
        <br />
        <br />
        <Link to="./signup">
          New to Meme Me?
          <br />
          Sign Up here.
        </Link>
      </form>
    );
  }
}

export default Landing;

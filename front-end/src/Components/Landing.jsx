import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import axios from "axios";
// import "../CSS/Landing.css";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            user_password: "",
            redirect: false,
            LoggedIn: false,
            error: false
        };
    }

    changeID = this.props.changeID;

    submitForm = async event => {
        event.preventDefault();

        let { email, user_password } = this.state;

        try {
            let {
                data: { user }
            } = await axios.post("http://localhost:3001/users/specific/active", {
                email,
                user_password
            });
            console.log(user);
            if (user.id) {
                this.setState({ error: 'valid' })
                this.setState({ redirect: true })
                this.changeID(user.id);
            } else {
                this.setState({ error: 'invalid' })
            }
        } catch (error) {
            console.log(error, "axios not working");
            this.setState({ error: true });
        }
    };

    handleInput = ({ target: { name, value } }) =>
        this.setState({ [name]: value });

    render() {
        let {
            state: { email, user_password, redirect, error },
            submitForm,
            handleInput
        } = this;

        if (redirect) return <Redirect to="/feed" />;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <form className="col s12" id="reg-form" onSubmit={submitForm}>
                            <h2>Welcome Meme Me</h2>
                            <div className="row">
                                <div className="input-field col s6 offset-s3">
                                    <input
                                        className="validate"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleInput}
                                        style={{validate: `${error}`}}
                                        required
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 offset-s3">
                                    <input
                                        className="validate"
                                        type="password"
                                        id="user_password"
                                        name="user_password"
                                        value={user_password}
                                        onChange={handleInput}
                                        style={{validate: `${error}`}}
                                        required
                                    />
                                    <label htmlFor="user_password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4 offset-s2">
                                    <Link
                                        className="buttonlink"
                                        to="/signup"
                                        style={{ color: "white" }}
                                    >
                                        <button
                                            className="btn btn-large btn-register waves-effect waves-light"
                                            type="button"
                                            name="action"
                                        >
                                            New to Meme Me?
                                            <br />
                                            Sign Up here.
                                        </button>
                                    </Link>
                                </div>
                                <div className="input-field col s4">
                                    <button
                                        className="btn btn-large btn-register waves-effect waves-light"
                                        type="submit"
                                        name="action"
                                    >
                                        Log-In
                                        <i className="material-icons right">done</i>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Landing;

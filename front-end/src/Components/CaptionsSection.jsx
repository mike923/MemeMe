import React, {Component} from 'react'
import axios from 'axios'
import '../CSS/CaptionSection.css'
import { Route, Link, Redirect } from 'react-router-dom'
import Feed from './Feed'
// import { Link, Redirect } from 'react-router-dom'

class CaptionsSection extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            // loggedIn: this.props.userIdLoggedIn,
            id: this.props.caption_id,
            commentSection: this.props.commentSection,
        }
    }

    turnCaptions = (caption) => {
        console.log(caption)
        return (
            <li className="collection-item avatar row" >
                <Link to={'/user/' + caption.displayname}>
                    <img src={caption.profilepic} alt="" className="circle"  />
                </Link>
                <span className="title">{caption.firstname}</span>
                <p>{caption.body}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        )
    }

    render() {
        let {
            state: {redirected_id},
            props: {commentSection},
        } = this

        if (redirected_id) return (<Redirect to='/user' />)
        return(
            <div className='container capsec'>
                <ul className="collection col s12">
                    {commentSection ? commentSection.map(this.turnCaptions) : []}
                </ul>
            </div>
        )
    }
}

export default CaptionsSection
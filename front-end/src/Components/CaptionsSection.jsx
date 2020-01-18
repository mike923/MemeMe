import React, {Component} from 'react'
import axios from 'axios'
import '../CSS/CaptionSection.css'
// import { Link, Redirect } from 'react-router-dom'

class CaptionsSection extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            // loggedIn: this.props.userIdLoggedIn,
            id: this.props.caption_id,
            commentSection: [],
        }
    }

    turnCaptions = (caption) => {
        console.log(caption)
        return (
            <li className="collection-item avatar row">
                <img src={caption.profilepic} alt="" className="circle"/>
                <span className="title">{caption.displayname}</span>
                <p>{caption.body}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        )
    }

    componentDidMount = async () => {
        const {id, commentSection} = this.state
        
        const commentArray = []
        try {
            let {data: {captions}} = await axios.get(`http://localhost:3001/captions/photos/${id}`)
            console.log(captions)
            captions.forEach(cap => {commentArray.push(cap.body)})
            this.setState({commentSection: captions})
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const {commentSection} = this.state
        return(
            <div className='container capsec'>
                <ul className="collection col s12">
                    {commentSection.map(this.turnCaptions)}
                </ul>
            </div>
        )
    }
}

export default CaptionsSection
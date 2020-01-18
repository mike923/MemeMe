import React, {Component} from 'react'
import axios from 'axios'
import '../CSS/CaptionSection.css'
// import { Link, Redirect } from 'react-router-dom'

class CaptionsSection extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            // loggedIn: this.props.userIdLoggedIn,
            id: 1,
            commentSection: []
        }
    }

    turnCaptions = (caption) => {
        return (
            <li className="collection-item avatar row">
                <img src={caption.picture_url} alt="" className="circle"/>
                <span className="title"></span>
                <p>First Line 
                    Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        )
    }

    componentDidMount = async () => {
        const {id, commentSection} = this.state
        const commentArray = []
        try {
            let data = await axios.get(`http://localhost:3001/captions/photos/${id}`)
            const captions = data.data.captions
            console.log(captions)
            captions.forEach(cap => {commentArray.push(cap.body)})
        } catch(error) {
            console.log(error)
        }
        this.setState({
            commentSection: commentArray
        })
    }

    render() {
        const {commentSection} = this.state
        return(
            <div className='container capsec'>
                <ul className="collection col s12">
                    <li className="collection-item avatar row">
                        <img src="images/yuna.jpg" alt="" className="circle"/>
                        <span className="title">Title</span>
                        <p>First Line 
                            Second Line
                        </p>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar row">
                        <i className="material-icons circle">folder</i>
                        <span className="title">Title</span>
                        <p>First Line 
                            Second Line
                        </p>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar row">
                        <i className="material-icons circle green">insert_chart</i>
                        <span className="title">Title</span>
                        <p>First Line 
                            Second Line
                        </p>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar row">
                        <i className="material-icons circle red">play_arrow</i>
                        <span className="title">Title</span>
                        <p>First Line 
                            Second Line
                        </p>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                </ul>
                <ul>{commentSection}</ul>
            </div>
        )
    }
}

export default CaptionsSection
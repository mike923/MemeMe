import React, {Component} from 'react'
import axios from 'axios'
import '../CSS/CaptionSection.css'
// import { Link, Redirect } from 'react-router-dom'

class CaptionsSection extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            // loggedIn: this.props.userIdLoggedIn,
            photoId: '',
            commentSection: []
        }
    }

    turnCaptions = (caption) => {
        return (
            // <div className='row'>
                <li className="collection-item avatar row">
                    <img src={caption.picture_url} alt="" className="circle"/>
                    <span className="title"></span>
                    <p>First Line 
                        Second Line
                    </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            //{/* </div> */}
        )
    }
    
    render() {
        let {
            // state: {loggedIn}
        } = this

        // if (!loggedIn) return(<Redirect to='/login' />)
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
            </div>
        )
    }
}

export default CaptionsSection
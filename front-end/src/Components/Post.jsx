import React, {Component} from 'react'
import axios from 'axios'
import SlideShow from './SlideShow'
import CaptionsSection from './CaptionsSection'
import InputCaption from './InputCaption'
import { Redirect } from 'react-router-dom'
import '../CSS/Post.css'

class Post extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            loggedIn: this.props.userIdLoggedIn,
            postId: ''
        }
    }
    
    render() {
        let {
            state:{loggedIn},
        }=this

        if (!loggedIn) return(<Redirect to='/login' />)
        return(
            <div className='postcss'>
                <SlideShow />
                <InputCaption />
                <CaptionsSection caption_id='1'/>
            </div>
        )
    }
}

export default Post
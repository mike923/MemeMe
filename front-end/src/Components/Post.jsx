import React, {Component} from 'react'
import axios from 'axios'
import SlideShow from './SlideShow'
import CaptionsSection from './CaptionsSection'
import InputCaption from './InputCaption'
import { Link, Redirect } from 'react-router-dom'

class Post extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            loggedIn: this.props.userIdLoggedIn,
        }
    }
    
    render() {
        let {
            state:{loggedIn},
        }=this

        if (!loggedIn) return(<Redirect to='/login' />)
        return(
            <div>
                <SlideShow />
                <InputCaption />
                <CaptionsSection />
            </div>
        )
    }
}

export default Post
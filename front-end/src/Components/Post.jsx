import React, {Component} from 'react'
import axios from 'axios'
import SlideShow from './SlideShow'
import CaptionsSection from './CaptionsSection'
import InputCaption from './InputCaption'

class Post extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
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
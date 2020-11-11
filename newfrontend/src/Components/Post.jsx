import React, {Component} from 'react'
import axios from 'axios'
import SlideShow from './SlideShow'
import CaptionsSection from './CaptionsSection'
import InputCaption from './InputCaption'
import { Redirect } from 'react-router-dom'
import url from '../apiURL'
import '../CSS/Post.css'

class Post extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: this.props.id,
            loggedIn: this.props.userIdLoggedIn,
            postId: '',
            commentSection: [],
        }
    }
    componentDidMount = async () => {
        await this.loadCaptions()
    }
    
    loadCaptions = async () => {
        const {id} = this.state
        const commentArray = []
        console.log('this.props in post.jsx', this.props)
        try {
            let {data: {captions}} = await axios.get(`${url}/captions/photos/${id}`)
            console.log('this should be all captions', captions)
            this.setState({commentSection: captions})
        } catch(error) {
            console.log(error)
        }
    }

    
    render() {
        let {
            state:{loggedIn, commentSection, id},
        }=this

        if (!loggedIn) return(<Redirect to='/login' />)
        return(
            <div className='postcss'>
                <SlideShow commentSection={commentSection}/>
                <InputCaption id={id} load={this.loadCaptions} commentSection={commentSection}/>
                <CaptionsSection commentSection={commentSection}/>
            </div>
        )
    }
}

export default Post
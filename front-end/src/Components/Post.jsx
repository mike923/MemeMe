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
            id: this.props.id,
            loggedIn: this.props.userIdLoggedIn,
            postId: '',
            commentSection: [],
        }
    }

    componentDidMount = async () => {
        const {id, commentSection} = this.state
        const commentArray = []
        console.log('this.props in post.jsx', this.props)
        try {
            let {data: {captions}} = await axios.get(`http://localhost:3001/captions/photos/${id}`)
            console.log('this should be all captions', captions)
            this.setState({commentSection: captions})
        } catch(error) {
            console.log(error)
        }
    }
    
    render() {
        let {
            state:{loggedIn, commentSection},
        }=this

        if (!loggedIn) return(<Redirect to='/login' />)
        return(
            <div className='postcss'>
                <SlideShow commentSection={commentSection}/>
                <InputCaption commentSection={commentSection}/>
                <CaptionsSection commentSection={commentSection}/>
            </div>
        )
    }
}

export default Post
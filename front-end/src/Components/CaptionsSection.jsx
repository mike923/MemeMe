import React, {Component} from 'react'
import axios from 'axios'
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
    // populateCaptions = async () => {
    //    console.log('comments', captions)
    //    const comments = captions.map(cap => {
    //        return(
    //         <ul>{cap}</ul>
    //        )
    //    })
    // }
    render() {
        const {commentSection} = this.state
        return(
            <div>
                <ul>{commentSection}</ul>
            </div>
        )
    }
}

export default CaptionsSection
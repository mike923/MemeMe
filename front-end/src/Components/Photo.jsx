import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LikeButton from '../Components/LikeButton'
import axios from 'axios'
import '../CSS/Photo.css'

class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: this.props.url,
            id: this.props.photo_id,
            caption: 'loading...'
        }
    }

    componentDidMount = async () => {
        let {id} = this.state
        try {
            let {data: {captions}} = await axios.get(`http://localhost:3001/captions/photos/${id}`)
            console.log('getting', captions)
            this.setState({caption: captions[0].body})
        } catch(error) {
            this.setState({
                caption: ''
            })
            console.log(error)
        }
    }

    render() {
        let {caption, url} = this.state

        return (<>
            <Link className='meme'>
                <img 
                    src={url}
                    className="meme" 
                    alt={caption}
                    title={caption}
                    width="305" 
                    height="229" 
                />
                <span className="top p">
                    {caption}
                    <div></div>
                </span>
            </Link>
            <LikeButton />
        </>)
    }
}


export default Photo
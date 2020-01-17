import React, { Component } from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import CaptionsSection from '../Components/CaptionsSection'
=======
import InputCaption from '../Components/InputCaption'
>>>>>>> d4477a4443ae6c4ef40abb27f016e0d3e13d1d2d
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


    // let {url, caption, picture_url} = props
    // console.log(url, caption)

    componentDidMount = async () => {
        let {id} = this.state
        // console.log(id)
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

<<<<<<< HEAD
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
=======
        return (
            
            <div className='meme' style={{backgroundImage: `url('${url}')`}}>
                <p className='top p' >{caption}</p>
                < InputCaption />
                < LikeButton />
            </div>
        )
>>>>>>> d4477a4443ae6c4ef40abb27f016e0d3e13d1d2d
    }
}


export default Photo
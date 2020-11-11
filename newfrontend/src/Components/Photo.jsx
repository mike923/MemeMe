import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from '../Components/DeleteButton'
import url from '../apiURL'
import axios from 'axios'
import '../CSS/Photo.css'
import CaptionsSection from './CaptionsSection'

class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: this.props.url,
            id: this.props.photo_id,
            caption: 'loading...',
            delPost: this.props.delPost
        }
    }

    componentDidMount = async () => {
        let {id} = this.state
        try {
            let {data: {captions}} = await axios.get(`${url}/captions/photos/${id}`)

            this.setState({caption: captions[0].body})
        } catch(error) {
            this.setState({
                caption: ''
            })
            console.log(error)
        }
    }

    render() {
        let {caption} = this.state
        let { url, delPost, photo_id} = this.props
        console.log('these are supposed to be our props', this.props)

//         let {caption, url, delPost, id, } = this.state

        return (<>
            <Link className='meme' to={'/post/'+photo_id}>
                <img 
                    
                    src={url}
                    className="meme" 
                    alt={caption}
                    title={caption}
                    width="305" 
                    height="229" 
                    // value={photo_id}
                />
                <span className="top p">
                    {caption}
                    <div></div>
                </span>
            </Link>
            {/* <LikeButton 
            id ={id}/> */}
            
            {delPost? <DeleteButton/> : ''}
            <CaptionsSection />
        </>)
    }
}


export default Photo
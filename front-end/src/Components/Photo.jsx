import React, { Component } from 'react'
import CaptionsSection from '../Components/CaptionsSection'
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
            console.log(captions)
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

        return (
            <div className='meme' style={{backgroundImage: `url('${url}')`}}>
                <p className='top p' >{caption}</p>
                <CaptionsSection />
            </div>
        )
    }
}


export default Photo
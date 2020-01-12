import React, { Component } from 'react'
import axios from 'axios'
import '../CSS/Photo.css'

class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: this.props.url,
            id: this.props.caption,
        }
    }


    // let {url, caption, picture_url} = props
    // console.log(url, caption)

    componentDidMount = async () => {
        let {id} = this.state
        console.log(id)
        let {data: {captions}} = await axios.get(`http://localhost:3001/captions/photos/${id}`)
        console.log(captions)
        this.setState({caption: captions[0].body})
    }

    render() {
        let {caption, url} = this.state

        return (
            <div className='meme' style={{backgroundImage: `url('${url}')`}}>
                <p className='top p' >{caption}</p>
                {/* <img src= {picture_url}></img> */}
                {/* <p className='bottom p'>meme meme meme</p> */}
            </div>
        )
    }
}


export default Photo
import React, { Component } from 'react'
import axios from 'axios'
import '../CSS/Photo.css'

class BigPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: this.props.url,
            id: this.props.photo_id,
            caption: this.props.caption,
            delPost: this.props.delPost,
            captions: [],
        }
    }

    componentDidMount = async() => {
        let {id} = this.state

        try {
            await axios.get(`http://localhost:3001/photos/${id}`)
        } catch(error) {
            
        }
    }

    render() {
        let {
            props: {url, caption, displayname},
        } = this

        return (<>
            <div className='meme'>
                <img 
                    src={url}
                    className="meme" 
                    alt={caption}
                    title={displayname}
                    width="1830px"
                    height="1374px" 
                />
                <span className="top p">
                    {caption}
                    <div></div>
                </span>
            </div>
        </>)
    }
}


export default BigPhoto
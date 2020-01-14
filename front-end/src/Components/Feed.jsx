import React, { Component } from 'react'
import Photo from '../Components/Photo'
import SearchBar from '../Components/SearchBar'
import axios from 'axios'

class Feed extends Component {
    constructor() {
        super()
        this.initialState = {
            profilePicAlt: 'filler',
            photoFeedArray: []
        }
        this.state = this.initialState
    }
    
    componentDidMount = async () => {
        let {data: {payload}} = await axios.get('http://localhost:3001/photos/all')
        // const photos = response.data.payload
        console.log(payload)
        // let photos = payload.map(async (photo) => {
        //     let {data: {captions}} = await axios.get(`http://localhost:3001/captions/photos/${photo.id}`)
        //     console.log(captions[0].body)
        //     photo.firstCaption = captions[0].body
        //     console.log(photo)
        //     return photo
        // })
        // console.log(photos)
        this.setState({
            photoFeedArray: payload
        })
    // this.buildPhotoArray(photos)
    }
    render() {
        let {
            state: {
                profilePicAlt,
                photoFeedArray
            },
        } = this
        const photoFeed = photoFeedArray.map(img => {
            
            return (
                <Photo
                    url={img.picture_url}
                    photo_id={img.id}
                    poster_id= {img.poster_id}
                    date_posted= {img.date_posted}
                />
            )
        })
        return(
            <div>
                <br></br>
                <div>
                    <SearchBar />
                </div>
                
                <h3>Feed</h3>   
                <div>
                    <ul>{photoFeed}</ul>
                </div>
            </div>
        )
    }
}

export default Feed
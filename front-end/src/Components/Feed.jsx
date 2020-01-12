import React, { Component } from 'react'
import Photo from '../Components/Photo'
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

    handleSearchBar = (event) => {
        console.log(event.target.value)

    }

    handleSubmit = (event) => {

    }
    // buildPhotoArray = async (photos) => {
    //    let photosArr = []
    //    photos.forEach(img => {
    //         photosArr.push(img.picture_url)
    //     })
    //     console.log(this.state.photoFeedArray)
    // }
    // loadFeed = async () => {
        //     const {photoFeedArray} = this.state
        
        // }
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
            console.log('asdfasdfasdf', img.firstCaption)
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
                <div>
                    <h4>Search for photos</h4>
                    <input type='search' onChange={this.handleSearchBar} onSubmit={this.handleSubmit}></input>
                </div>
                <div>
                    <h3>Feed</h3>   
                    <div>
                        <ul>{photoFeed}</ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed
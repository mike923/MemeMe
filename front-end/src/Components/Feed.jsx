import React, { Component } from 'react'
import Photo from '../Components/Photo'
import SearchBar from '../Components/SearchBar'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Feed extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            profilePicAlt: 'filler',
            photoFeedArray: [],
            loggedIn: this.props.userIdLoggedIn,
        }
        this.state = this.initialState
    }
    
    componentDidMount = async () => {
        let {data: {payload}} = await axios.get('http://localhost:3001/photos/all')
        console.log(payload)
        this.setState({ photoFeedArray: payload })
    }

    render() {
        let {
            state: {
                profilePicAlt,
                photoFeedArray,
                loggedIn,
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

        if (!loggedIn) return(<Redirect to='/login' />)
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
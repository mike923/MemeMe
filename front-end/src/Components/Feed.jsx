import React, { Component } from 'react'
import Photo from '../Components/Photo'
import SearchBar from '../Components/SearchBar'
import SubFeed from '../Components/SubFeed'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import '../CSS/Feed.css'


class Feed extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            profilePicAlt: 'filler',
            photoFeedArray: [],
            loggedIn: this.props.userIdLoggedIn,
            searchFeedArray: [],
            searched: false
        }
        this.state = this.initialState
    }
    
    componentDidMount = async () => {
        let {data: {payload}} = await axios.get('http://localhost:3001/photos/all')
        console.log(payload)
        this.setState({ photoFeedArray: payload })
    }

    updateSearchArray = async (searchFeedArray, searched) => {
        console.log('searchFeedArr',searchFeedArray)
        await this.setState({searchFeedArray: searchFeedArray, searched: searched})
       
    }

    turnPhoto = img => {
        return (
            <Photo
                url={img.picture_url}
                photo_id={img.photo_id}
                poster_id= {img.poster_id}
                date_posted= {img.date_posted}
            />
        )
    }

    render() {
        let {
            state: {
                photoFeedArray,
                loggedIn,
                searchFeedArray,
                searched,
            },
            updateSearchArray,
        } = this    

        if (!loggedIn) return(<Redirect to='/login' />)
        return(
            <div>
                <br></br>
                <div className= "searchBar">
                    <SearchBar updateSearchArray={updateSearchArray}/>
                </div>
                <br></br>
                <h3>Feed</h3> 
                <SubFeed photos={searched ? searchFeedArray : photoFeedArray}/>  
            </div>
        )
    }
}

export default Feed
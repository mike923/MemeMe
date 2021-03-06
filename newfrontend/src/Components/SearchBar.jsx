import React , {Component} from 'react'
import url from '../apiURL'
import axios from 'axios'
import '../CSS/SearchBar.css'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            user_id : this.props.userIdLoggedIn,
            searchValue: '',
            photoFeed: this.props.photoFeed,
            searchBarArray: this.props.searchFeedArray
        }
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState ({
            searchValue : e.target.value
        })
    }

    grabImage = async (id) => {
        try {
            const {data:{payload}} = await axios.get(`${url}/captions/photos/${id}`)
            console.log(payload)
        } catch(error) {
            console.log('err', error)
        }
    }

    updateSearchArray = this.props.updateSearchArray

    searchResultNetworkRequest = async (e) => {
        e.preventDefault()
        
        const {searchValue} = this.state
            try{
                const {data:{payload}} = await axios.get(`${url}/captions/search/${searchValue}`)
                console.log('payload',payload)
                await this.updateSearchArray(payload, true)
            } catch(error){ 
                console.log('err', error)
            }
    }
    
    render(){
        const {searchValue} = this.state
        return (
            <div className="nav-wrapper row searchbar">
                <form className='col s8 offset-s2' onSubmit={this.searchResultNetworkRequest}>
                    <div className="input-field col s12">
                    <input id="search" type="search" className='' value={searchValue} onChange={this.handleSearch} required/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        )
    }
    
}
    
        
export default SearchBar
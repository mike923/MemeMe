import React , {Component} from 'react'
import axios from 'axios'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            user_id : this.props.userIdLoggedIn,
            searchValue: ''
        }
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState ({
            searchValue : e.target.value
        })
    }

    handleSubmit = async (e) => {
        const {searchValue} = this.state

        if (searchValue.length > 0){
            this.searchResultNetworkRequest()
        } else{
            console.log('nothing')
        } 
    }

    grabImage = async (id) => {
        try {

        } catch(error) {

        }
    }

    searchResultNetworkRequest = async (e) => {
        e.preventDefault()
        const {searchValue} = this.state
            try{
                const {data:{payload}} = await axios.get(`http://localhost:3001/captions/search/${searchValue.toLowerCase()}`)
                console.log(payload)
                return payload
            } catch(error){ 
                console.log('err', error)
            }
    }
    render(){
        const {user_id, searchValue} = this.state
        return (
            <div>
                <form onSubmit={this.searchResultNetworkRequest}>
                    <input type= 'search' value={searchValue} onChange={this.handleSearch}></input>
                </form>
            </div>
            
        )
    }
}
    
        
export default SearchBar
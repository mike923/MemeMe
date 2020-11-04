import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {url} from '../apiURL'
import axios from 'axios'

class InputCaption extends Component {
    constructor(props) {
        super(props) 
        this.initialState = {
            caption: '',
        }
        this.state = this.initialState
    }

    handleInput = ({target: {value}}) => this.setState({caption: value})

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log(this.props.id)
        try {
            let {data} = await axios.post(`${url}/captions/photos`, {photo_id: this.props.id, commenter_id: this.state.id, body:this.state.caption})
            console.log(data)
            this.setState({caption:''})
            this.props.load()

        } catch(error) {
            console.log(error)
        }
    }
    
    componentDidMount = async () => {
        let id = sessionStorage.getItem('id')
        try {
            let {data:{user}} = await axios.get(`${url}/users/${id}`)
            console.log(user)
            this.setState(user)
        } catch(error) {
            console.log(error)
        }
    }
    
    render() {
        let {
            state: {
                caption,
            },
            handleInput,
            handleSubmit,
        } = this

        return(
            <div className='container' >
            <div className="row">
                <form className="collection col s12" onSubmit={handleSubmit}>
                    <div className="ipnut-field collection-item avatar row" style={{textAlign: 'left'}}>
                        <Link to={'/user/' + this.state.displayname}>
                            <img src={this.state.profilepic} alt="" className="circle"  />
                        </Link>
                        <span className="title" style={{textAlign: 'left'}}>{this.state.firstname}</span>
                        <input value={caption} onChange={handleInput} id="icon_prefix2" placeholder="write your caption here" className="materialize-textarea" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default InputCaption
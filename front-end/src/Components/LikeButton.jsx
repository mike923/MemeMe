import React, {Component} from 'react'
import axios from 'axios'
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


class LikeButton extends Component {
    constructor(){
        super()
        this.initialState = {
            liked: true,
            message:'',
        }
        this.state = this.initialState 
    }

    componentDidMount = async() => {
        await this.reloadLikes()
    }
    
    reloadLikes = async () => {
        try {
            let {data} = await axios.get(`http://localhost:3001/likes/captions/${this.props.id}/liker/${sessionStorage.getItem('id')}`)
            console.log(data)
            this.setState({liked: data.data.like_value})
        } catch(error) {
            this.setState({liked: false})
    
        }
    }

    handleClick = async (event) => {
        const {liked} = this.state
        console.log('like button is clicked',liked)
        console.log(this.props.id)
        console.log(event.target.value, 'target')
        // this.setState({
        //     liked: !liked
        // })   
        try{
            let {data} = await axios.post(`http://localhost:3001/likes/captions/${this.props.id}`, {like_value: liked, liker_id: sessionStorage.getItem('id')})
            console.log(data)
            this.setState({liked: !this.state.liked})
        } catch(error) {

        }

    }

    render() {
        const {liked} = this.state
        return (
            <a onClick={this.handleClick}className="secondary-content" style={!liked?{color:'#26a69a'}:{color:'red'}}>
                <i className="material-icons" >grade</i>
            </a>
        ) 
    }
}


export default LikeButton
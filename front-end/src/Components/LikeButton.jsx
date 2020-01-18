import React, {Component} from 'react'
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


class LikeButton extends Component {
    constructor(){
        super()
        this.initialState = {
            liked: false,
            message:'',
        }
        this.state = this.initialState 
    }

    handleClick = (e) => {
        const {liked} = this.state
        console.log('like button is clicked',liked)
        this.setState({
            liked: !liked
        })   
    }

    render() {
        const {liked} = this.state
        if (liked === false){
            return (
                <div>
                    <button onClick={this.handleClick}>Like</button> 
                </div>
                )
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>Unlike</button>
                </div>
                ) 
         }
        
    }
}




export default LikeButton
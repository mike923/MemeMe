import React, {Component} from 'react'
import Axios from 'axios'
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

    handleClick = (event) => {
        const {liked} = this.state
        console.log('like button is clicked',liked)
       console.log(this.props.id)
        console.log(event.target.value, 'target')
        this.setState({
            liked: !liked
        })   

    }

//   AddLikes= async ()=>{
//         try {
//             let data = await Axios.post(`http:http://localhost:3000/likes/captions/:caption_id`)
//             console.log(data)
//         }catch (error){
//             console.log('Did not store LIKE!')
//         }
//     }






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
import React from 'react'
import axios from 'axios'

class PhotoUpload extends React.Component {
    constructor(){
        super()
        this.state = {
            user_id: 2,
            imageFile: null,
            imgURL: '',
        }
    }  

   
    // handleDatePosted = (event) => {
    //     const newDate = Date.now()
    //     this.setState({
    //         date_posted: newDate
    //     })
    //     console.log(newDate)
    // }
    handleFileInput = (event) => {
        console.log('file changed')
        console.dir(event.target)
        console.log(event.target.files[0])
        this.setState ({
            imageFile: event.target.files[0]
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {user_id} = this.state
        const data = new FormData()
        data.append('imgURL', this.state.imageFile)
        // data.append('date_posted', this.state.date_posted)
        try{
            const response = await axios.post(`http://localhost:3001/photos/upload/${user_id}`, data)
            console.log(response.data)
            this.setState ({
                imgURL: response.data,
            })
        } catch(error) {
            console.log('err', error)
        }
    }

    render() {
        return (
            <div className ='uploader'>
                <form onSubmit={this.handleSubmit} >
                    <input type='file' onChange={this.handleFileInput} />
                    <input type='submit' value='Upload' />
                </form>
            </div>
        )
    }  
}

export default PhotoUpload;
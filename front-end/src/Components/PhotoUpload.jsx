import React from 'react'
import axios from 'axios'

class PhotoUpload extends React.Component {
    constructor(){
        super()
        this.state = {
            user_id: '',
            imageFile: null,
            imgURL: ''
        }
    }  

    handleUserProfile = (event) => {

    }
    handleFileInput = (event) => {
        console.log('file changed')
        console.dir(event.target)
        // console.log(event.target.files[0].lastModified + '-' + event.target.files[0].name)
        console.log(event.target.files[0])
        this.setState ({
            imageFile: event.target.files[0]
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post('http://localhost:3001/photos/upload')
        } catch(error) {
            console.log('err', error)
        }
    }

    render() {
        return (
            <div className ='uploader'>
                <form>
                    <input type='file' onChange={this.handleFileInput}/>
                    <input type='submit' value='Upload'/>
                </form>
            </div>
        )
    }  
}

export default PhotoUpload;
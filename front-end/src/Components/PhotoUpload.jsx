import React from 'react'
import axios from 'axios'

class PhotoUpload extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.userIdLoggedIn,
            imageFile: null,
            imgURL: '',
        }
    }  
 
    // handlePicturePreview = (event) => {
    //     console.log(imgURL)
    //     return (
    //         <img src={imgURL}></img>
    //     )
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
        console.log(data)
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
            <div className ='uploader container'>
                <form onSubmit= {this.handleSubmit} className='col s12'>
                    <div className='row'>
                        <div className='file-field input-field inline s6'>
                            <div className = 'file-path-wrapper'>
                                <input className = 'file-path validate' type = 'text' />
                            </div>
                            <div className='btn'>
                                <span> File </span> 
                                <input type ='file' onChange={this.handleFileInput} />
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }  
}

export default PhotoUpload;
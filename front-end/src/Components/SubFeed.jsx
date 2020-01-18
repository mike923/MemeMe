import React, { Component } from "react"
import Photo from './Photo'

class SubFeed extends Component{
    constructor(props) {
        super(props)
        this.state = {
            photos: this.props.photos,
            delPost: this.props.delPost
        }
    }

    // componentDidMount = async () => {
    //     this.setState({ photos: this.props.photos})
    // }

    turnPhoto = (img) => {
        const {delPost} = this.props
        return (
            <div className='col s12 m6 l4'>
                <div className='card'>
                    <div className='card-image waves-effect waves-block waves-light'>
                        <Photo 
                            url={img.picture_url}
                            photo_id={img.id}
                            poster_id= {img.poster_id}
                            date_posted= {img.date_posted}
                            delPost = {delPost}
                        />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let {props:{photos}, turnPhoto} = this
        console.log('props', this.props)
        console.log('photos', photos)

        return (    
            <div className='container'>
                <div className='section'>
                    <div className='row'>
                        <div className='col s12'>
                            <div className='section'>
                                {photos.map(turnPhoto)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubFeed
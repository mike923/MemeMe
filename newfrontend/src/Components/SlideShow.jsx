import React, {Component} from 'react'
import BigPhoto from './BigPhoto'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
}

class Slideshow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.photo_id,
            url: '',
            commentSection: [],
        }
    }

    renderBigPhoto = (caption) => {
        return (
            <div className="each-fade">
                <div className="image-container">
                    <BigPhoto 
                        url={caption.picture_url}
                        // photo_id={this.state.id}
                        caption={caption.body}
                        displayname={caption.displayname}
                    />
                </div>
            </div>
        )
    }

    render() {
        return (<>
            <Fade {...fadeProperties}>
                {this.props.commentSection.map(this.renderBigPhoto)}
            </Fade>
        </>)
    }
}


export default Slideshow
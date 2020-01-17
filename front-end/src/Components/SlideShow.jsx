import React, {Component} from 'react'
// import axios from 'axios'
// import { Link, useHistory } from 'react-router-dom'
// import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
// import { red, blue, green } from '@material-ui/core/colors'
// import Button from '@material-ui/core/Button'
import Photo from './Photo'
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    'file:///Users/michaeld.amparo/Desktop/core/unit_4_reactt/group_project_01052020/MemeMe%202/front-end/public/logo512.png'
];

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

        }
    }

    handleSubmit = (event) => {
        event.preventDefault()


    }

    render() {
        let {
            handleSubmit
        } = this

        return (<>
            <Fade {...fadeProperties}>
                <div className="each-fade">
                    <div className="image-container">
                        <Photo 
                            url='https://www.fosi.org/media/images/22601782810_cbe3ede5f5_o.focus-none.original.jpg'
                            photo_id='2'
                        />
                    </div>
                    {/* <h2>First Slide</h2> */}
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src='https://www.fosi.org/media/images/22601782810_cbe3ede5f5_o.focus-none.original.jpg' />
                    </div>
                    <h2>Second Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src='https://www.fosi.org/media/images/22601782810_cbe3ede5f5_o.focus-none.original.jpg' />
                    </div>
                    <h2>Third Slide</h2>
                </div>
            </Fade>
        </>)
    }
}


export default Slideshow
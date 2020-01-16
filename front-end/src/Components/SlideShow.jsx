import React, {Component} from 'react'
// import axios from 'axios'
// import { Link, useHistory } from 'react-router-dom'
// import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
// import { red, blue, green } from '@material-ui/core/colors'
// import Button from '@material-ui/core/Button'
// import React from 'react';
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

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <Photo 
              url='https://www.fosi.org/media/images/22601782810_cbe3ede5f5_o.focus-none.original.jpg'
              photo_id='2'
          />
          {/* <img src='https://www.fosi.org/media/images/22601782810_cbe3ede5f5_o.focus-none.original.jpg' /> */}
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
  )
}



// class SlideShow extends Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             open: true
//         }
//     }


    
    
//     render() {
//         return(<>
//         <Slideshow />
//             {/* <div style={{ position: 'relative', width: '100%', height: 500 }}>
//             <div><br/><br/><br/><br/><br/>textpp<br/>textpp<br/>textpp<br/>textpp<br/>textpp<br/>textpp<br/>textpp<br/>textpp<br/></div>
//                 <Button onClick={() => this.setState({ open: true })}>Open carousel</Button>
//                 <AutoRotatingCarousel
//                     label='x'
//                     open={this.state.open}
//                     onClose={() => this.setState({ open: false })}
//                     onStart={() => this.setState({ open: false })}
//                     style={{ position: 'fixed' }}
//                 >
//                     <Slide
//                         media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
//                         mediaBackgroundStyle={{ backgroundColor: red[400] }}
//                         style={{ backgroundColor: red[600] }}
//                         title='This is a very cool feature'
//                         subtitle='Just using this will blow your mind.'
//                         />
//                     <Slide
//                         media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
//                         mediaBackgroundStyle={{ backgroundColor: red[400] }}
//                         style={{ backgroundColor: red[600] }}
//                         title='Ever wanted to be popular?'
//                         subtitle='Well just mix two colors and your are good to go!'
//                         />
//                     <Slide
//                         media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
//                         mediaBackgroundStyle={{ backgroundColor: red[400] }}
//                         style={{ backgroundColor: red[600] }}
//                         title='May the force be with you'
//                         subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
//                     />
//                 </AutoRotatingCarousel>
//             </div> */}
            
//             </>
//         )
//     }
// }


export default Slideshow
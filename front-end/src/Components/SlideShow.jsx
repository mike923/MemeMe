import React, {Component} from 'react'
import axios from 'axios'
import {Carousel, Button} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function HomeButton() {
    const history = useHistory();
  
    function handleClick() {
      history.push("/feed");
    }
  
    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    );
  }

class SlideShow extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        return(
            <Carousel>
                <HomeButton />
                <img
                    className="d-block w-100"
                    src="https://i.kym-cdn.com/photos/images/newsfeed/001/248/399/430.png"
                    alt="Photo"
                />
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}


export default SlideShow
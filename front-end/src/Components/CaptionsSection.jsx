import React, {Component} from 'react'
import axios from 'axios'
// import { Link, Redirect } from 'react-router-dom'

class CaptionsSection extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            // loggedIn: this.props.userIdLoggedIn,
            
        }
    }

    render() {
        let {
            // state: {loggedIn}
        } = this

        // if (!loggedIn) return(<Redirect to='/login' />)
        return(
            <div>
                Captions section
            </div>
        )
    }
}

export default CaptionsSection
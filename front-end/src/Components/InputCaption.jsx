import React, {Component} from 'react'
import axios from 'axios'

class InputCaption extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            caption: ''
        }
    }

    handleInput = ({target: {value}}) => this.setState({caption: value})

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(this.state.caption)
    }

    render() {
        let {
            state: {
                caption,
            },
            handleInput,
            handleSubmit,
        } = this

        return(
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">First Name</label>
                        </div>
                    </div>
                </form>
            </div>

            // <form onSubmit={handleSubmit}>
            //     <input type="text" value={caption} onChange={handleInput}/>
            // </form>
        )
    }
}

export default InputCaption
import React, { Component } from "react";
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      user_id: this.props.userIdLoggedIn,
      photo_id: this.props.photo_id,
      deleted: false,
      message: ""
    };
    this.state = this.initialState;
  }

  handleClick = e => {
    const { deleted } = this.state;
    console.log("deleted button is clicked", deleted);
    this.setState({
      deleted: !deleted
    });
  };

  render() {
    const { deleted, photo_id, user_id} = this.state;
    if (deleted === false && photo_id === user_id) {
      return (
        <div>
          <button onClick={this.handleClick}>Delete</button>
        </div>
      );
    }else{
        return(
            null
        )
    }
  }
}

export default DeleteButton;

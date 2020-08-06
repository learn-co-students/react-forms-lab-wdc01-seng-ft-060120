import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ''
    }
  }

  handleInput = event => {
    this.setState({ 
      message: event.target.value,
      maxChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleInput(event)} type="text" name="message" id="message" value={this.state.message} />
        <div> Max Characters: {this.state.maxChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;

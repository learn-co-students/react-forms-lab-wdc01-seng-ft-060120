import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleClick = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleClick} value={this.state.message}/>
        <h3> {  this.props.maxChars - this.state.message.length } characters left </h3>
      </div>
    );
  }
}

export default TwitterMessage;

import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      message: ''
    };
  }

  updateRemaining = (e) => {
    let newRemaining = this.state.remainingChars - 1 
    let newMessage = e.target.value
    this.setState( {
      remainingChars: newRemaining,
      message: newMessage
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.updateRemaining} remainingChars={this.state.remainingChars}/>
        <p><span>{this.state.remainingChars}</span> Characters Remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;

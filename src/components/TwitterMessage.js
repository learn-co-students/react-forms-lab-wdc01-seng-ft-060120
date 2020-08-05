import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charactersLeft: 280
    };
  }

  handleTweetChange = (e) => {
    this.setState({
      
      message: e.target.value,
      charactersLeft: 280 - e.target.value.length

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleTweetChange} type="text" name="message" id="message" value={this.state.message}/>
        <div>Characters Left: {this.state.charactersLeft}</div>
      </div>
    );
  }
}

export default TwitterMessage;

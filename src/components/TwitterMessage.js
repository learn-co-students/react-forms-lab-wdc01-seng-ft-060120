import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      maxChars: props.maxChars,
      tweet: ""
    };
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.tweet} />
        <h4>{this.state.maxChars - this.state.tweet.length}</h4>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
        tweet: event.target.value
    });
  }
}

export default TwitterMessage;

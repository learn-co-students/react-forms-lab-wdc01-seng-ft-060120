import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {input: ""};
  }
  
  remaining = () =>
  {
    return this.props.maxChars - this.state.input.length
  }

  updateInput = (e) =>
  { 
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input  type="text" name="message" id="message"
                onChange={e => this.updateInput(e)}
                value={this.state.input}
        />
        <p>Remaining Chars: {this.remaining()}</p>
      </div>
    );
  }
}

export default TwitterMessage;

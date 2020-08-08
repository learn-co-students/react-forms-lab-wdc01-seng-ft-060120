import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleChange = event =>{
    const newValue = event.target.value
    this.setState({
      message: newValue
    }) 
  }


  render() {
    let remainingNumber = this.props.maxChars - this.state.message.length;
    return (
      
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  
        onChange={event => this.handleChange(event)} 
        value={this.state.message}/>
        {/* <h1>{this.props.maxChars}</h1> */}
        {remainingNumber }
      </div>
    );
  }
}

export default TwitterMessage;

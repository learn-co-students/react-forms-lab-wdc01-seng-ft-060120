import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginValidation = event => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== ''){
      let loginObject = { username: this.state.username, password: this.state.password}
      this.props.handleLogin(loginObject)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleLoginValidation(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleUsername(event)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handlePassword(event)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (e) => {
    let usernameInput = e.target.value
    this.setState({
      username: usernameInput
    })
  }

  handlePassword = (e) => {
    let passInput = e.target.value
    this.setState({
      password: passInput
    })
  }

  handleLoginValidation = (e) => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      let loginObj = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.handleLogin(loginObj)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLoginValidation}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handlePassword}/>
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

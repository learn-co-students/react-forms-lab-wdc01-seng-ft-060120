import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.handleLogin = props.handleLogin
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleChange(event)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleChange(event)} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state);
    }
  }

}

export default LoginForm;

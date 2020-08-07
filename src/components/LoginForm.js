import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
  }

  handleUpdate = (e) =>
  {
    const tgt = e.target
    this.setState({[tgt.name]: tgt.value})
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleLogin(this.state)}
      }>
        <div>
          <label>
            Username
            <input  id="username" name="username" 
                    type="text"   onChange={e => this.handleUpdate(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input  id="password" name="password" 
                    type="password"   onChange={e => this.handleUpdate(e)}/>
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

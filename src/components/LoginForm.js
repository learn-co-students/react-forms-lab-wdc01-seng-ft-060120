import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

handleId =(e)=>{
this.setState({
  [e.target.name]: e.target.value,
})
}

handleSubmit = event => {
  event.preventDefault()

  if (!this.state.username || !this.state.password) return

  this.props.handleLogin(this.state)
}


  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange={this.handleId} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
             onChange={this.handleId} value={this.state.password} />
          </label>
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

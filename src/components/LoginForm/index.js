import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', isError: false}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  usernameInput = () => {
    const {username} = this.state
    return (
      <>
        <lable htmlFor="username" className="lable-element">
          USERNAME
        </lable>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onUsernameChange}
          className="input-element"
        />
      </>
    )
  }

  passwordElement = () => {
    const {password} = this.state
    return (
      <>
        <lable htmlFor="password" className="lable-element">
          PASSWORD
        </lable>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onPasswordChange}
          className="input-element"
        />
      </>
    )
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  onSubmitButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const details = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {isError, errorMsg} = this.state
    return (
      <div className="login-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form onSubmit={this.onSubmitButton}>
          <div className="mini-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-img-ele"
            />
            <div className="input-con">{this.usernameInput()}</div>
            <div className="password-con">{this.passwordElement()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {isError && <p className="error-msg">{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm

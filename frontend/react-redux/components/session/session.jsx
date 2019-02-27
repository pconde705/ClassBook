import React from 'react';
import './sessionStyle.css'

class Session extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  componentDidMount() {

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  render() {
    return (
      <div>
        <header className="login-navbar">
          <div className="login-header">
            <div>
              <p className="login-logo">classbook</p>
            </div>
            <table>
              <tbody>
                <tr>
                  <td><p className="login-p">Email</p></td>
                  <td><p className="login-p">Password</p></td>
                </tr>
                <tr>
                  <td className="login-td"><input onChange={this.handleInput('email')} className="login-input"></input></td>
                  <td className="login-td"><input type="password" onChange={this.handleInput('password')} className="login-input"></input></td>
                  <td><button className="login-button">Log In</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </header>
        <main className="signup-main">
          <div className="signup-overall-div">
            <div>
              <p className="signup-slogan">Connect with you friends</p>
            </div>
            <div>
              <p className="signup-title">Sign Up</p>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInput('fname')} placeholder="First Name"></input>
                <input onChange={this.handleInput('lname')} placeholder="Last Name"></input>
                <input onChange={this.handleInput('email')} placeholder="Email"></input>
                <input onChange={this.handleInput('password')} placeholder="Password"></input>
                <button type="Submit">Sign Up</button>
              </form>
            </div>
          </div>
        </main>
        <footer>
          <div>

          </div>
        </footer>
      </div>
    );
  }
}

export default Session;

import React from 'react';
import './sessionStyle.css'

class Session extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(e) {
    e.preventDefault();
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
                  <td className="login-td"><input className="login-input"></input></td>
                  <td className="login-td"><input className="login-input"></input></td>
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
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <input type="Submit" value="Sign Up"></input>
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

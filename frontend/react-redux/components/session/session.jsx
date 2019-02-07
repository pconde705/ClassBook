import React from 'react';
import './sessionStyle.css'

class Session extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {

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
          <div>
            <div>
              <p>Connect with you friends</p>
            </div>
            <div>
              <p>Sign Up</p>
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

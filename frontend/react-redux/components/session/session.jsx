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
        <header className="sign-up-header">
          <div>
            <p className="sign-up-logo">classbook</p>
          </div>
          <div className="sign-up-forms">
            <div>
              <p>Email</p>
              <input></input>
            </div>
            <div>
              <p>Password</p>
              <input></input>
            </div>
            <button>Log In</button>
          </div>
        </header>
        <main>
          <div>
            <p>Connect with you friends</p>
          </div>
          <div>
            <p>Sign Up</p>
          </div>
        </main>
      </div>
    );
  }
}

export default Session;

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleImage from './google.png';
import logo from './AdventureLogbookLogo.png';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className='Auth'>
          <div className='loginLogo' style={{ backgroundImage: `url(${logo})` }}>
          <button onClick={this.loginClickEvent} className='btn btn-secondary login'>
          <img className='loginButtonImg'src={googleImage} alt='google sign in' />
        </button>
        </div>
      </div>
    );
  }
}

export default Auth;

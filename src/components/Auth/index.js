import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleImage from './google.png';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className='Auth'>
        <button onClick={this.loginClickEvent} className='btn btn-secondary login'>
          <img src={googleImage} alt='google sign in' />
        </button>
      </div>
    );
  }
}

export default Auth;

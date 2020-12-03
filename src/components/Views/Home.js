import React from 'react';
import Auth from '../Auth';
import Loader from '../Loader';

export default function Home(props) {
  const loadComponent = () => {
    let component = '';
    if (props.user === null) {
      component = <Loader />;
    } else if (props.user) {
      component = <h1>Search component goes here!</h1>;
    } else {
      component = <Auth />;
    }
    return component;
  };
  return (
    <div>
      {loadComponent()}
    </div>
  );
}

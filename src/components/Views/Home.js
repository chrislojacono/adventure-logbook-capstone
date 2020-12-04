import React from 'react';
import Auth from '../Auth';
import Loader from '../Loader';
import SearchBox from '../Search';

export default function Home(props) {
  const loadComponent = () => {
    let component = '';
    if (props.user === null) {
      component = <Loader />;
    } else if (props.user) {
      component = <SearchBox/>;
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

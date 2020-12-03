import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../components/Views/Home';
import ToDoList from '../components/Views/ToDo';
import Logbook from '../components/Views/Logbook';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route exact path='/' component={() => <Home user={user} />} />
        <Route exact path='/todo' component={() => <ToDoList user={user} />} />
        <Route exact path='/logbook' component={() => <Logbook user={user} />} />
        <Route component={() => <Home user={user} />} />
      </Switch>
  );
}

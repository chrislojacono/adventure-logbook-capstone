import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../components/Views/Home';
import ToDoList from '../components/Views/ToDo';
import Logbook from '../components/Views/Logbook';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route exact path='/' component={() => <Home user={user} />} />
        <PrivateRoute
          exact
          path='/todo'
          component={ToDoList}
          user={user}
        />
        <PrivateRoute
          exact
          path='/logbook'
          component={Logbook}
          user={user}
        />
        <Route component={() => <Home user={user} />} />
      </Switch>
  );
}

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user}/>)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)}/>;
};

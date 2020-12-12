import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUserClimbs, deleteToDoClimb } from '../../helpers/data/ClimbData';
import ToDoCard from '../Cards/ToDoCard';
import getUid from '../../helpers/data/AuthData';
import WrappedMap from '../../helpers/data/GoogleMaps3';
import { ApiKeys } from '../../helpers/ApiKeys';

export default class ToDoList extends Component {
  state = {
    toDoClimbs: [],
    showTheClimbs: '',
  };

  componentDidMount() {
    this.loadTheClimbs();
  }

  loadTheClimbs = () => {
    const userId = getUid();
    getAllUserClimbs(userId).then((response) => {
      this.setState({
        toDoClimbs: response,
        showTheClimbs: true,
      });
    });
  }

  deleteCard = (firebaseKey) => {
    deleteToDoClimb(firebaseKey).then(() => {
      this.loadTheClimbs();
    });
  }

  render() {
    const { toDoClimbs, showTheClimbs } = this.state;
    const renderClimbs = () => toDoClimbs.map((climb) => <ToDoCard routeData={climb} key={climb.firebaseKey} onUpdate={this.loadTheClimbs} deleteCard={this.deleteCard} user={this.props.user} />);
    const renderNoClimbs = () => (
      <div>
      <h1 className='noItemsInListMessage'>Find some climbs and add them to your To-Do List <Link to='/'>Here!</Link></h1>
    </div>
    );
    const timeoutDisplay = () => {
      setTimeout(() => {
        renderNoClimbs();
      }, 3000);
    };
    return (
        <>
        <div style={{ width: '40vw', height: '40vh' }} className='m-auto'>
        <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ApiKeys.GoogleApiKey}`}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}>
        </WrappedMap>
        </div>
        {showTheClimbs
          ? (<>
            <h1 className="toDoTitle m-2">To-Do List</h1>
            <div className="d-flex justify-content-center flex-wrap">
            {renderClimbs()}
            </div>
            </>
          ) : timeoutDisplay() }
        </>
    );
  }
}

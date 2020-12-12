import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUserClimbs, deleteToDoClimb } from '../../helpers/data/ClimbData';
import ToDoCard from '../Cards/ToDoCard';
import getUid from '../../helpers/data/AuthData';
import GoogleMapsWrapper from '../../helpers/GoogleMapsDynamic';
import MyMarker from '../Cards/myMarker';
// import { MapContainer } from '../../helpers/GoogleMaps2';

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
    const renderClimbs = () => toDoClimbs.map((climb) => <ToDoCard routeData={climb} key={climb.id} onUpdate={this.loadTheClimbs} deleteCard={this.deleteCard} user={this.props.user} />);
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
        <GoogleMapsWrapper>
          {
          this.state.toDoClimbs.map((climb) => <MyMarker key={climb.id} routeData={climb} lat={climb.latitude} lng={climb.longitude}/>)
          }
        </GoogleMapsWrapper>
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

import React, { Component } from 'react';
import { getAllUserClimbs } from '../../helpers/data/ClimbData';
import ToDoCard from '../Cards/ToDoCard';
import getUid from '../../helpers/data/AuthData';

export default class ToDoList extends Component {
  state = {
    toDoClimbs: [],
  };

  componentDidMount() {
    this.loadTheClimbs();
  }

  loadTheClimbs = () => {
    const userId = getUid();
    getAllUserClimbs(userId).then((response) => {
      this.setState({
        toDoClimbs: response,
      });
    });
  }

  render() {
    const { toDoClimbs } = this.state;
    const renderClimbs = () => toDoClimbs.map((climb) => <ToDoCard routeData={climb} key={climb.id} onUpdate={this.loadTheClimbs} />);
    return (
        <>
        <h1 className="toDoTitle">To-Do List</h1>
        <div className="d-flex justify-content-center flex-wrap">
        {toDoClimbs.length
        && renderClimbs()}
        </div>

        </>
    );
  }
}

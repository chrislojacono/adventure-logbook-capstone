import React, { Component } from 'react';
import { getAllUserLogs } from '../../helpers/data/LogbookData';
import LogbookCard from '../Cards/LogbookCard';
import getUid from '../../helpers/data/AuthData';

export default class Logbook extends Component {
  state = {
    logbookEntries: [],
  };

  componentDidMount() {
    this.loadTheClimbs();
  }

  loadTheClimbs = () => {
    const userId = getUid();
    getAllUserLogs(userId).then((response) => {
      this.setState({
        logbookEntries: response,
      });
    });
  }

  render() {
    const { logbookEntries } = this.state;
    const renderClimbs = () => logbookEntries.map((climb) => <LogbookCard routeData={climb} key={climb.firebaseKey} onUpdate={this.loadTheClimbs}/>);
    return (
        <>
        <h1 className="toDoTitle m-2">Logbook</h1>
        <div className="d-flex justify-content-center flex-column flex-wrap align-content-center">
        {logbookEntries.length
        && renderClimbs()}
        </div>
        </>
    );
  }
}

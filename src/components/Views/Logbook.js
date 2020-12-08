import React, { Component } from 'react';
import { getAllUserLogs } from '../../helpers/data/LogbookData';
import LogbookCard from '../Cards/LogbookCard';
import getUid from '../../helpers/data/AuthData';

export default class Logbook extends Component {
  state = {
    logbookEntries: [],
    showTheClimbs: '',
  };

  componentDidMount() {
    this.loadTheClimbs();
  }

  loadTheClimbs = () => {
    const userId = getUid();
    getAllUserLogs(userId).then((response) => {
      this.setState({
        logbookEntries: response,
        showTheClimbs: true,
      });
    });
  }

  render() {
    const { logbookEntries, showTheClimbs } = this.state;
    const renderClimbs = () => logbookEntries.map((climb) => <LogbookCard routeData={climb} key={climb.firebaseKey} onUpdate={this.loadTheClimbs}/>);
    const renderNoClimbs = () => (
      <div>
      <h1 className='noItemsInListMessage'>No climbs in your logbook yet!</h1>
    </div>
    );
    const timeoutDisplay = () => {
      setTimeout(() => {
        renderNoClimbs();
      }, 3000);
    };
    return (
      <>
      {showTheClimbs
        ? (<>
          <h1 className="toDoTitle m-2">Logbook</h1>
          <div className="d-flex justify-content-center flex-column-reverse align-items-center">
          {renderClimbs()}
          </div>
          </>
        ) : timeoutDisplay() }
      </>
    );
  }
}

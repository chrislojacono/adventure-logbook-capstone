import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';
import getUser from '../../helpers/data/AuthData';
import { deleteToDoClimb } from '../../helpers/data/ClimbData';
import { addLogbookEntry, updateLogbook } from '../../helpers/data/LogbookData';

export default class LogbookForm extends Component {
  state = {
    firebaseKey: this.props.logbookData?.firebaseKey || '',
    userId: this.props.logbookData?.userId || '',
    beta: this.props.logbookData?.beta || '',
    userRating: this.props.logbookData?.userRating || 0,
    id: this.props.routeData?.id || this.props.logbookData?.id,
    url: this.props.routeData?.url || this.props.logbookData?.url,
    name: this.props.routeData?.name || this.props.logbookData?.name,
    grade: this.props.routeData?.grade || this.props.logbookData?.grade,
    imageUrl:
      this.props.routeData?.imageUrl || this.props.logbookData?.imageUrl,
    userImage: this.props.user?.photoURL,
    displayName: this.props.user?.displayName,
  };

  componentDidMount() {
    const userId = getUser();
    this.setState({ userId });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeRating = (newRating) => {
    this.setState({
      userRating: newRating,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    if (this.state.firebaseKey === '') {
      addLogbookEntry(this.state).then(() => {
        deleteToDoClimb(this.props.routeData?.firebaseKey).then(() => {
          this.props.onUpdate?.();
        });
        this.setState({ success: true });
        setTimeout(() => {
          this.props.toggle();
        }, 3000);
      });
    } else {
      updateLogbook(this.state).then(() => {
        this.props.onUpdate?.();
        this.setState({ success: true });
        setTimeout(() => {
          this.props.toggle();
        }, 3000);
      });
    }
  };

  render() {
    const { success } = this.state;
    return (
      <>
        {success && (
          <div className='alert alert-success' role='alert'>
            Your Logbbok entry was stored!
          </div>
        )}
        <div
          className='img-container card-body'
          style={{
            backgroundImage: `url(${
              this.state.imageUrl || this.props.routeData?.imageUrl
            })`,
          }}
        ></div>
        <form onSubmit={this.handleSubmit}>
          <div className='m-2'>
            <input
              type='text'
              name='beta'
              value={this.state.beta}
              onChange={this.handleChange}
              placeholder='Any comments or beta?'
              className='form-control form-control-lg mb-2 mt-1'
              required
            />
          </div>
        <div className='m-3'>
        <Ratings
            rating={parseInt(this.state.userRating, 10)}
            widgetRatedColors='#F7F134'
            widgetHoverColors='#F7F134'
            changeRating={this.changeRating}
            widgetDimensions='40px'
            widgetSpacings='15px'
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>

          <button
            ref={(btn) => {
              this.btn = btn;
            }}
            className='btn btn-primary m-2'
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

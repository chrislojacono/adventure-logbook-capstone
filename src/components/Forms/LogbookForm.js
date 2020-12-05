import React, { Component } from 'react';
import getUser from '../../helpers/data/AuthData';
import { deleteToDoClimb } from '../../helpers/data/ClimbData';
import { addLogbookEntry, updateLogbook } from '../../helpers/data/LogbookData';

export default class LogbookForm extends Component {
  state = {
    firebaseKey: this.props.logbookData?.firebaseKey || '',
    userId: this.props.logbookData?.userId || '',
    beta: this.props.logbookData?.beta || '',
    userRating: this.props.logbookData?.userRating || '',
    climbId: this.props.routeData?.id || this.props.logbookData?.climbId,
    url: this.props.routeData?.url || this.props.logbookData?.url,
    climbName: this.props.routeData?.name || this.props.logbookData?.climbName,
    climbGrade: this.props.routeData?.grade || this.props.logbookData?.climbGrade,
    imageUrl: this.props.routeData?.imageUrl || this.props.logbookData?.imageUrl,
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    if (this.state.firebaseKey === '') {
      addLogbookEntry(this.state).then(() => {
        deleteToDoClimb(this.props.routeData?.firebaseKey).then(() => {
          this.props.onUpdate?.();
        });
        this.setState({ success: true });
      });
    } else {
      updateLogbook(this.state).then(() => {
        this.props.onUpdate?.();
        this.setState({ success: true });
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
              backgroundImage: `url(${this.state.imageUrl || this.props.routeData?.imageUrl
              })`,
            }}
          ></div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='beta'
              value={this.state.beta}
              onChange={this.handleChange}
              placeholder='Any comments or beta?'
              className='form-control form-control-lg m-2'
              required
            />
          </div>
          <div>
          <select
            as='select'
            name='userRating'
            className="form-control form-control-lg m-2"
            value={this.state.name}
            onChange={this.handleChange}
            defaultValue={this.state.userRating}
           required>
            <option>Rate the Climb!!</option>
            <option value='1'>1 star</option>
            <option value='2'>2 stars</option>
            <option value='3'>3 stars</option>
            <option value='4'>4 stars</option>
            <option value='5'>5 stars</option>
           </select>
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
import React, { Component } from 'react';
import { Form, Alert } from 'reactstrap';
import GoogleMapSearch from '../../helpers/data/MapsApi';
import getRoutes from '../../helpers/data/MountainProjectApi';
import ClimbCard from '../Cards/ClimbCard';
import AppModal from '../AppModal';
import logo from '../../helpers/images/AdventureLogbookLogo.png';

export default class SearchBox extends Component {
  state = {
    lattitude: '',
    longitude: '',
    searchInput: '',
    maxDiff: '',
    minDiff: '',
    maxDist: '',
    maxResults: '',
    style: '',
    routes: [],
    success: false,
    noRoutes: false,
  };

  searchTerm = (text) => (
    GoogleMapSearch(text).then((response) => {
      this.setState({
        lattitude: response.lat,
        longitude: response.lng,
      });
    })
  )

  clearState = () => {
    this.setState({
      lattitude: '',
      longitude: '',
      searchInput: '',
      maxDiff: '',
      minDiff: '',
      maxDist: '',
      maxResults: '',
      style: '',
      tester: '',
      routes: [],
      success: false,
      noRoutes: false,
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchInput } = this.state;

    this.searchTerm(searchInput);
  };

  handleSubmit2 = (e) => {
    e.preventDefault();
    const {
      lattitude,
      longitude,
      maxDiff,
      minDiff,
      maxDist,
      maxResults,
    } = this.state;

    getRoutes(lattitude, longitude, maxDist, maxResults, minDiff, maxDiff).then(
      (response) => {
        if (response.data.routes.length > 1) {
          response.data.routes.forEach((item) => {
            this.setState({
              routes: this.state.routes.concat(item),
              success: true,
            });
          });
        } else {
          this.setState({
            noRoutes: true,
          });
          setTimeout(() => {
            this.setState({
              noRoutes: false,
            });
          }, 3000);
        }
      },
    );
  };

  render() {
    const {
      routes,
      success,
      lattitude,
      style,
      noRoutes,
    } = this.state;
    const displayClimbs = () => routes.map((route) => <ClimbCard routeData={route} key={route.id} />);

    return (
      <>
        <AppModal
          className2={'homeModal'}
          clearState={this.clearState}
          title={'Find A Climb!'}
          btnColor={'info'}
          buttonLabel={'Find A Climb!'}
        >
          {success && <Alert variant={'success'}>Routes found!</Alert>}
          {noRoutes && <Alert variant={'danger'} color="danger">No routes found within {this.state.maxDist} of {this.state.searchInput} try somewhere else!</Alert>}
          {lattitude === '' ? (
            <Form onSubmit={this.handleSubmit}>
              <label>Where are you headed?</label>
              <div>
                <input
                  type='text'
                  name='searchInput'
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder='Search an Area'
                  className='form-control form-control-lg m-1'
                  required
                />
              </div>
              <div>
                <label>Choose Your Style of Climbing</label>
                <select
                  as='select'
                  name='style'
                  className='form-control form-control-lg m-1'
                  value={this.state.name}
                  onChange={this.handleChange}
                  defaultValue='Choose...'
                  required
                >
                  <option>Choose...</option>
                  <option>Bouldering</option>
                  <option>Sport/Top Rope/Trad</option>
                </select>
              </div>
              <button className='btn btn-primary m-2' type='submit'>
                Next
              </button>
            </Form>
          ) : (
            <Form onSubmit={this.handleSubmit2}>
              <div>
                <label>Max Results</label>
                <select
                  as='select'
                  name='maxResults'
                  className='form-control form-control-lg m-1'
                  value={this.state.name}
                  onChange={this.handleChange}
                  defaultValue='Choose...'
                  required
                >
                  <option>Choose...</option>
                  <option value='2'>2 (for development/testing)</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                </select>
              </div>
              <div>
                <label>Max Distance Away</label>
                {/* <input type="range" min="0" max="250" value={this.state.maxDist} name='maxDist' onChange={(e) => { this.handleChange(e); }}/> */}
                <select
                  className='form-control form-control-lg m-1'
                  as='select'
                  name='maxDist'
                  value={this.state.name}
                  onChange={this.handleChange}
                  defaultValue='Choose...'
                  required
                >
                  <option>Choose...</option>
                  <option>5 miles</option>
                  <option>10 miles</option>
                  <option>15 miles</option>
                  <option>25 miles</option>
                  <option>50 miles</option>
                  <option>100 miles</option>
                  <option>150 miles</option>
                  <option>200 miles</option>
                </select>
              </div>
              <div>
                <label>Minimum Difficulty</label>
                <select
                  as='select'
                  name='minDiff'
                  className='form-control form-control-lg m-1'
                  value={this.state.name}
                  onChange={this.handleChange}
                  defaultValue='Choose...'
                  required
                >
                  {style === 'Bouldering' ? (
                    <>
                      <option>Choose...</option>
                      <option>V0</option>
                      <option>V1</option>
                      <option>V2</option>
                      <option>V3</option>
                      <option>V4</option>
                      <option>V5</option>
                      <option>V6</option>
                      <option>V7</option>
                      <option>V8</option>
                      <option>V9</option>
                      <option>V10</option>
                      <option>V11</option>
                      <option>V12</option>
                    </>
                  ) : (
                    <>
                      <option>Choose...</option>
                      <option>5.6</option>
                      <option>5.7</option>
                      <option>5.8</option>
                      <option>5.9</option>
                      <option>5.10a</option>
                      <option>5.10b</option>
                      <option>5.10c</option>
                      <option>5.10d</option>
                      <option>5.11a</option>
                      <option>5.11b</option>
                      <option>5.11c</option>
                      <option>5.11d</option>
                      <option>5.12a</option>
                      <option>5.12b</option>
                      <option>5.12c</option>
                      <option>5.12d</option>
                    </>
                  )}
                </select>
              </div>
              <div>
                <label>Maximum Difficulty</label>
                <select
                  as='select'
                  name='maxDiff'
                  className='form-control form-control-lg m-1'
                  value={this.state.name}
                  onChange={this.handleChange}
                  defaultValue='Choose...'
                  required
                >
                  {style === 'Bouldering' ? (
                    <>
                      <option>Choose...</option>
                      <option>V0</option>
                      <option>V1</option>
                      <option>V2</option>
                      <option>V3</option>
                      <option>V4</option>
                      <option>V5</option>
                      <option>V6</option>
                      <option>V7</option>
                      <option>V8</option>
                      <option>V9</option>
                      <option>V10</option>
                      <option>V11</option>
                      <option>V12</option>
                    </>
                  ) : (
                    <>
                      <option>Choose...</option>
                      <option>5.6</option>
                      <option>5.7</option>
                      <option>5.8</option>
                      <option>5.9</option>
                      <option>5.10a</option>
                      <option>5.10b</option>
                      <option>5.10c</option>
                      <option>5.10d</option>
                      <option>5.11a</option>
                      <option>5.11b</option>
                      <option>5.11c</option>
                      <option>5.11d</option>
                      <option>5.12a</option>
                      <option>5.12b</option>
                      <option>5.12c</option>
                      <option>5.12d</option>
                    </>
                  )}
                </select>
              </div>
              <button className='btn btn-primary m-2' type='submit'>
                Submit
              </button>
            </Form>
          )}
        </AppModal>

        {
          <div className='d-flex flex-wrap justify-content-center'>
            {routes.length ? (
              displayClimbs()
            ) : (
              <img className='homePageLogo m-3' src={logo} alt='logo' />
            )}
          </div>
        }
      </>
    );
  }
}

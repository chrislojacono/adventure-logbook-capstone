import React from 'react';
import ReactWeather from 'react-open-weather';
import Button from '@material-ui/core/Button';
import { ApiKeys } from '../../helpers/ApiKeys';
import { getAllLogsOfSpecificClimb } from '../../helpers/data/LogbookData';
import CommentCard from '../Cards/CommentCard';

export default class ClimbDetails extends React.Component {
  state = {
    userComments: [],
  };

  componentDidMount() {
    getAllLogsOfSpecificClimb(this.props.routeData?.id).then((response) => {
      console.warn(response);
      this.setState({
        userComments: response,
      });
    });
  }

  render() {
    const { routeData } = this.props;
    const { userComments } = this.state;
    return (
      <>
        <ReactWeather
          forecast='5days'
          apikey={ApiKeys.OpenWeatherKey}
          type='geo'
          lon={`${routeData.longitude}`}
          lat={`${routeData.latitude}`}
          unit='imperial'
        />
        <div className='d-flex flex-column w-100'>
          {userComments.map((data) => (
            <CommentCard data={data} key={data.id} />
          ))}
        </div>
        <div className='m-2'>
          <a href={routeData.url} target='_blank' rel='noreferrer'>
            <Button variant='contained' color='primary'>
              More Info
            </Button>
          </a>
        </div>
      </>
    );
  }
}

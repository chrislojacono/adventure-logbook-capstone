import React from 'react';
import stock1 from '../../helpers/images/stock1.jpg';
import stock2 from '../../helpers/images/stock2.jpg';
import stock3 from '../../helpers/images/stock3.jpg';
import stock4 from '../../helpers/images/stock4.jpg';
import stock5 from '../../helpers/images/stock5.jpg';
import stock6 from '../../helpers/images/stock6.jpg';
import stock7 from '../../helpers/images/stock7.jpg';

export default class ClimbCard extends React.Component {
  imageArray = [stock1, stock2, stock3, stock4, stock5, stock6, stock7]

  getRandomImage = () => {
    const image = this.imageArray[Math.floor(Math.random() * this.imageArray.length)];
    return image;
  }

  render() {
    const { routeData } = this.props;
    return (
      <div className='card m-2 grow'>
        <a href={routeData.url} target='_blank' rel='noreferrer'>
          <h3 className='card-title grow'>{routeData.name}</h3>
          <div
            className='img-container card-body'
            style={{
              backgroundImage: `url(${
                routeData.imgMedium === '' ? this.getRandomImage() : routeData.imgMedium
              })`,
            }}
          ></div>
        </a>
        <h5 className='card-text'>{routeData.rating}</h5>
        <h5 className='card-text'>{routeData.stars}/5 Stars</h5>
        <h6 className='card-text locationCard'>
          <b>Area: </b>
          {routeData.location[2]}
        </h6>
        <h6 className='card-text locationCard'>
          <b>Region: </b>
          {routeData.location[1]}
        </h6>
        <h6 className='card-text locationCard'>
          <b>State: </b>
          {routeData.location[0]}
        </h6>
      </div>
    );
  }
}

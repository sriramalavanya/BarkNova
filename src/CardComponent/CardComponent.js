import React, { Component, useState } from 'react';
import './../index.css';
import './CardComponent.css'

var _this;
export default class Cardcomponent extends Component {

  constructor(props) {
    super(props);
    _this = this;
  }
  state = {
    components: []
  };

  static showDogs(dogs) {
    let childComponents = [];
    for (let index = 0; index < dogs.length; index++) {
      let mystyle = {
        backgroundImage: `url('${dogs[index].image.url}')`,

      }
      childComponents.push(
        <div key={index} >
          <a href={dogs[index].image.url} target="_blank">
            <div style={mystyle} className='dogsImgs'></div>
          </a>
          <div className='detailsDivStyles'>
            <h2 className='dogNameStyle'>{dogs[index].name}</h2>
            <p className='detailTextsStyle'><span> Height: </span> {dogs[index].height.metric}<span > cm </span></p>
            <p className='detailTextsStyle'><span> Weight: </span>{dogs[index].weight.metric} <span> kg </span></p>
            <p className='detailTextsStyle'><span>Life span: </span> {dogs[index].life_span.toString().replace('years', '')}<span>years</span></p>
            <p className='detailTextsStyle'><span> Temperament: </span>{dogs[index].temperament}</p>
          </div>
        </div >
      );
    }
    _this.setState({ components: childComponents });
  }

  render() {

    return (
      <div className='containorStyles' >
        {this.state.components}
      </div>
    )
  }
}

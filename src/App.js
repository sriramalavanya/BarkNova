import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import CardComponent from './CardComponent/CardComponent';
import SearchBarComponent from './SearchComponent/SearchBarComponent';

export default class App extends Component {

  render() {

    return (
      <div>
        <HeaderComponent />

        <SearchBarComponent />

        <CardComponent />
      </div>
    )
  }
}



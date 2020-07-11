import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {
  render() {
    return (
      <>
        <h1>This is a Gallery List</h1>
        {console.log('this.props.items contains:', this.props.items)}
        <ul>
          {this.props.items.map((item, index)=>
          <GalleryItem key={index}/>)}
        </ul>
      </>
    );
  }
}

export default GalleryList;

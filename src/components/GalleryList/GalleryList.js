import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.items.map((item)=>
          <GalleryItem key={item.id} item={item}/>)}
        </ul>
      </>
    );
  }
}

export default GalleryList;

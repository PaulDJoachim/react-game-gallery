import React, { Component } from 'react';


class GalleryItem extends Component {
  render() {
    return (
      <li>
        <h1>This is a Gallery Item</h1>
        <img src="images/goat_small.jpg" alt="a goat"/>
      </li>
    );
  }
}

export default GalleryItem;

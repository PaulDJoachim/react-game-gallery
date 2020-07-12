import React, { Component } from 'react';


class GalleryItem extends Component {
  render() {
    return (
      <li>
        <h1>This is a Gallery Item</h1>
        <img src={this.props.item.path} alt={this.props.item.title}/>
        <p>{this.props.item.description}</p>
      </li>
    );
  }
}

export default GalleryItem;

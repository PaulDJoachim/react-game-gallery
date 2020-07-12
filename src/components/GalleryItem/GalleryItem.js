import React, { Component } from 'react';


class GalleryItem extends Component {

  addLikeHandle = (event) => {
    console.log('onClick:', event.target.id)
    // this runs the "addLike" method and passes the id argument back up to it.
    this.props.addLike(event.target.id)
  }

  render() {
    return (
      <li>
        <h1>This is a Gallery Item</h1>
        <img src={this.props.item.path} alt={this.props.item.title}/>
        <p>{this.props.item.description}</p>
        <button id={this.props.item.id} onClick={this.addLikeHandle}>Like</button>
        <p>likes:{this.props.item.likes}</p>
      </li>
    );
  }
}

export default GalleryItem;

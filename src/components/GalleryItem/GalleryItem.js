import React, { Component } from 'react';


class GalleryItem extends Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    console.log('in toggle details');
    this.setState({
      details: !this.state.details
    })
  }

  addLikeHandle = (event) => {
    console.log('onClick:', event.target.id)
    // this runs the "addLike" method and passes the id argument back up to it.
    this.props.addLike(event.target.id)
  }

  render() {
    return (
      <li>
        <img src={this.props.item.path} alt={this.props.item.title} onClick={this.toggleDetails}/>
        {this.state.details ? 
          <>
          <p>{this.props.item.description}</p>
          <button id={this.props.item.id} onClick={this.addLikeHandle}>Like</button>
          <p>likes:{this.props.item.likes}</p>
          </>
          :
          <p></p>}
      </li>
    );
  }
}

export default GalleryItem;

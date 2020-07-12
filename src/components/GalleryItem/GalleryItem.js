import React, { Component } from 'react';


class GalleryItem extends Component {

  state = {
    details: false
  }

  toggleDetails = (event) => {
    console.log('in toggle details');
    this.setState({
      details: !this.state.details
    })
  }

  addLikeHandle = (event) => {
    event.stopPropagation();
    console.log('onClick:', event.target.id)
    // this runs the "addLike" method and passes the id argument back up to it.
    this.props.addLike(event.target.id)
  }

  // defines a style that darkens the forground image and uses it as background for the description
  style = "linear-gradient(#000000D0, #000000D0, #00000000), url(" + this.props.item.path + ")";

  render() {
    return (
      
      <li onClick={this.toggleDetails} style={{background: this.style}}>
        {this.state.details ? 
          <>
          <p class="desc">{this.props.item.description}</p>
          <button id={this.props.item.id} onClick={this.addLikeHandle}>Like</button>
          <p class="likeCount">Likes:{this.props.item.likes}</p>
          </>
          :<img src={this.props.item.path} alt={this.props.item.title} onClick={this.toggleDetails}/>
        }
      </li>
    );
  }
}

export default GalleryItem;

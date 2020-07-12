import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import Axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    galleryItems: []
  }


  componentDidMount(){
    console.log('App mounted');
    this.getItems();
  } // end componentDidMount


  getItems(){
    Axios({
      method: 'GET',
      url: '/gallery',
    }).then ((response)=>{
      console.log('back from GET:', response.data);
      // hold data in state.items
      this.setState({
        galleryItems: response.data
      })
    }).catch((err)=>{
      console.log('error on /gallery GET',err);
    });
  }// end getItems


  addLike = (id) =>{
    console.log('CLICK! on ID #', id);
    Axios({
      method: 'PUT',
      url: 'gallery/like/' + id,
    }).then ((response)=>{
      console.log('back from PUT:', response.data);
      this.getItems()
      // hold data in state.items
      // this.setState({
      //   galleryItems: response.data
      // })
    }).catch((err)=>{
      console.log('error!',err);
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Games of my life</h1>
        </header>
        <main>
          <button onClick={this.likeButton}>Like</button>
          <p>Likes: {}</p>
          <GalleryList items={this.state.galleryItems} addLike={this.addLike}/>
        </main>
      </div>
    );
  }
}

export default App;

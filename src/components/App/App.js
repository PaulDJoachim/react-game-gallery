import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import Axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    galleryItems: []
  }

  componentDidMount(){
    console.log('Inventory mounted');
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
      console.log('error!',err);
    });
  
  }// end getItems





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        {console.log('this.state.galleryItems has:', this.state.galleryItems)}
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" alt="a goat stands on white rocks in front of pine trees"/> */}
        <GalleryList items={this.state.galleryItems}/>
      </div>
    );
  }
}

export default App;

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
        <main>
          <GalleryList items={this.state.galleryItems}/>
        </main>
      </div>
    );
  }
}

export default App;

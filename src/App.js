import React from 'react';
import './App.css';
import Data from './Data';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      button: 0,
      latitude: "59.337239",
      longitude: "18.062381"
    };
  }

  fixed = () => {
    this.setState({button: 1});
  }

  current = () => {
    
    navigator.geolocation.getCurrentPosition( (position) => {
      //console.log(position.coords.latitude + " " + position.coords.longitude)
      this.setState({latitude: position.coords.latitude});
      this.setState({longitude: position.coords.longitude});
      this.setState({button: 2});
    });
  }
  
  render() {

    if(this.state.button===0) {
      return (
        <Header fixed={this.fixed} current={this.current}/>
      )
    }
    else {
      {console.log(this.state.latitude + " -> " + this.state.longitude)}
      return (
        <Data latitude={this.state.latitude} longitude={this.state.longitude}/>
      )
    }
    
  }

}

export default App;

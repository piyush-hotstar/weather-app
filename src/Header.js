import React from 'react';
import './App.css';
import Data from './Data';
import Header from './Header';

class App extends React.Component {

    fixed = e => {
        e.preventDefault();
        this.props.fixed();
    }

    current = e => {
        e.preventDefault();
        this.props.current();
    }
  
  render() {

    return (
    <div>
        <button onClick={this.fixed}> Fixed Location </button>
        <button onClick={this.current}> Current Location </button>
    </div>
    )
    
  }

}

export default App;

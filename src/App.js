import React from 'react';
import './App.css';
import Data from './Data';
import Header from './Header';
import { observer } from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';

function App ({store}) {

    console.log("button " + store.buttonStatus);
    if(store.buttonStatus===0) {
      return (
        <Header store={store}/>
      )
    }
    else if(store.buttonStatus===3){
      return (
        <p>
          {store.message}
        </p>
      )
    }
    else {
      //{console.log(store.latitudeStatus + " -> " + store.longitudeStatus)}
      return (
        <Data store={store}/>
      )
    }
  //)
  
} 

export default observer(App);

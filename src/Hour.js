import React from 'react';
import axios from 'axios'
import './App.css';


const Hour = (props) => {

    console.log(props)
    return <p>{props.time}, temperature= {props.temperature}</p>
}

export default Hour;
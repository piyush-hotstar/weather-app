import React from 'react';
import './App.css';
import { observer } from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'

function Data ( {store} ) {

  if(store.loading)
  {
    return "fetching....";
  }

  const complete = store.whole

  const hourly = complete.hourly.data;
  const currently = complete.currently;

  return (
      <div className="container">
          {
              store.message !=null ?
          <Alert variant={"danger"}>{store.message}</Alert>
          : null
          }
          <h2>Coordiantes:</h2>
          <h5>LATITUDE: {store.latitude}, LONGITUDE: {store.longitude}</h5>
          <h2>Timezone:</h2>
          <h5>{store.whole.timezone}</h5>
          <h2>Current Temprature:</h2>
          <h5>{currently.temperature} F</h5>
          <h2>Current Weather:</h2>
          <h5>{currently.summary}</h5>
          <h2>Hourly statistics</h2>
          <ol>
              <Table>
                  
                      <thead>
                  <tr>
                      <td>Time: </td>
                      <td>Summary: </td>
                      <td>Temperature: </td>
                  </tr>
                  </thead>
                  <tbody>
              {
                  
                  hourly.map((hour,index) => (
                      <tr key={index}>
                      <td>{store.convert(hour.time)}</td>
                      <td>{hour.summary}</td>
                      <td>{hour.temperature}</td>
                      </tr>
                  ))
                  
              }
              </tbody>
              </Table>
          </ol>
      </div>
      
  )
  
}

export default observer(Data);

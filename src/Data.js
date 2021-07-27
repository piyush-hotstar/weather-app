import React from 'react';
import './App.css';
import { observer } from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';

function Data ( {store} ) {

  if(store.loading)
  {
    return "fetching....";
  }

  const complete = store.whole

  const hourly = complete.hourly.data;
  const currently = complete.currently;

  const center = {
      display: "flex",
      justifyContent: "center"
  }

  return (
      <div className="container">
          {
            store.message !=null ?
            <Alert variant={"danger"}>{store.message}</Alert>
            : null
          }
          <h5 style={center}>Coordinates: {store.latitude}, {store.longitude}</h5>
          <h5 style={center}>Timezone: {store.whole.timezone}</h5>
          <h1 style={center}>{currently.temperature} &deg;F</h1>
          <h5 style={center}>{currently.summary}</h5>
          <Accordion>
          <Accordion.Item eventKey="0">
          <Accordion.Header>Hourly statistics</Accordion.Header>
          <Accordion.Body>
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
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div>
      
  )
  
}

export default observer(Data);

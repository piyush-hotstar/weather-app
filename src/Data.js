import React from 'react';
import { observer } from "mobx-react-lite";
import { Table } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Beatloader from 'react-spinners/BeatLoader';

function Data ( {store} ) {

    const center = {
        display: "flex",
        justifyContent: "center"
    }

  if(store.loading)
  {
      return (
        <div className="container" style={{marginTop: "400px", display: "flex", justifyContent: "center"}}>
            <Beatloader />
        </div>
      )
   
  }
  else {

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
                <h5 style={center}>Coordinates: {store.coordinates.latitude}, {store.coordinates.longitude}</h5>
                <h5 style={center}>Timezone: {store.whole.timezone}</h5>
                <h1 style={center} className="text-7xl">{currently.temperature} &deg;F</h1>
                <h5 style={center} className="text-3xl">{currently.summary}</h5>
                <Accordion defaultActiveKey="0">
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
  
}

export default observer(Data);

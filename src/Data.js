import React from 'react';
import './App.css';
//import Store from './Store'
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
  console.log(complete)
  

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
                      //console.log(hour);
                      <tr key={index}>
                      <td>{store.convert(hour.time)}</td>
                      <td>{hour.summary}</td>
                      <td>{hour.temperature}</td>
                      </tr>
                    //   <li> TIME: , SUMMARY: , TEMPERATURE: </li>
                  ))
                  
              }
              </tbody>
              </Table>
          </ol>
      </div>
      
  )
  
}

// class Data extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       whole: {},
//       latitude:0,
//       longitude:0
//     };
//   }

  

//   async componentDidMount() {
     
//         try {
//         let response = await axios.get(`/forecst/2bb07c3bece89caf533ac9a5d23d8417/${this.props.latitude},${this.props.longitude}`)
//         this.setState({whole: response.data})
//         this.setState({loading: false})
//         localStorage.setItem('localStorage', (JSON.stringify(response.data)));
        
//         }
//         catch (err) {
//           await this.setState({whole: JSON.parse(localStorage.getItem('localStorage')),loading: false})
//         }   
//   }

//   convert = (time) => {
//     var date = new Date(time);

//     return date.toString("MMM dd");
//   }
  
//   render() {

//     if(this.state.loading)
//     {
//       return "fetching....";
//     }

    
//     const complete = this.state.whole
//     console.log(complete)
    

//     const hourly = complete.hourly.data;
//     const currently = complete.currently;

//     return (
//         <div>
//             <h2>Coordiantes:</h2>
//             <h5>LATITUDE: {this.props.latitude}, LONGITUDE: {this.props.longitude}</h5>
//             <h2>Timezone:</h2>
//             <h5>{this.state.whole.timezone}</h5>
//             <h2>Current Temprature:</h2>
//             <h5>{currently.temperature} F</h5>
//             <h2>Current Weather:</h2>
//             <h5>{currently.summary}</h5>
//             <h2>Hourly statistics</h2>
//             <ol>
//                 {
//                     hourly.map((hour) => (
//                         //console.log(hour);
                        
//                         <li> TIME: {this.convert(hour.time)}, SUMMARY: {hour.summary}, TEMPERATURE: {hour.temperature}</li>
//                     ))
//                 }
//             </ol>
//         </div>
        
//     )
//   }

// }

export default observer(Data);

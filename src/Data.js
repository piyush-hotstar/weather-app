import React from 'react';
import axios from 'axios'
import './App.css';
import Hour from './Hour';

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      whole: {},
      latitude:0,
      longitude:0
    };
  }

  

   async componentDidMount() {
     
        try {
        let response = 
        
        await axios.get(`/forecast/2bb07c3bece89caf533ac9a5d23d8417/${this.props.latitude},${this.props.longitude}`)
        //response = response.data;
        //response = await response.json();
        this.setState({whole: response.data})
        this.setState({loading: false})
        //console.log("whole->" + JSON.stringify(this.state.whole))
        localStorage.setItem('localStorage', (JSON.stringify(response)));
        
        }
        catch (err) {
          
          const response = await localStorage.getItem('localStorage');
          
          this.setState({whole: response})
          //console.log("local-->" + this.state.whole)
        }
        //console.log(response.data);
        
        
        
        // this.setState({hourly: response.data.hourly.data},() => console.log(this.state.hourly));
        // this.setState({currently: response.data.currently});     
  }

  convert = (time) => {
    var date = new Date(time);

    return date.toString("MMM dd");
  }
  
  render() {

    if(this.state.loading)
    {
      return "fetching....";
    }

    const complete = this.state.whole
    
    
    // console.log("Local-->" + localStorage.getItem('localStorage'))
    //const complete = response

    const hourly = complete.hourly.data;
    const currently = complete.currently;

    return (
        <div>
            <h2>Coordiantes:</h2>
            <h5>LATITUDE: {this.props.latitude}, LONGITUDE: {this.props.longitude}</h5>
            <h2>Timezone:</h2>
            <h5>{this.state.whole.timezone}</h5>
            <h2>Current Temprature:</h2>
            <h5>{currently.temperature} F</h5>
            <h2>Current Weather:</h2>
            <h5>{currently.summary}</h5>
            <h2>Hourly statistics</h2>
            <ol>
                {
                    hourly.map((hour) => (
                        //console.log(hour);
                        
                        <li> TIME: {this.convert(hour.time)}, SUMMARY: {hour.summary}, TEMPERATURE: {hour.temperature}</li>
                    ))
                }
            </ol>
        </div>
        
    )
  }

}

export default Data;

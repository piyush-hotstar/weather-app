import React from 'react';
import { observer } from "mobx-react-lite";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header ({store}) {

  return (
    <div className="container">
        <Button onClick={() => store.fixed()}> Fixed Location </Button>
        <Button variant="info" sty onClick={() => store.current()}> Current Location </Button>
    </div>
    )
  
}

// class App extends React.Component {

//     fixed = e => {
//         e.preventDefault();
//         this.props.fixed();
//     }

//     current = e => {
//         e.preventDefault();
//         this.props.current();
//     }
  
//   render() {

//     return (
//     <div>
//         <button onClick={this.fixed}> Fixed Location </button>
//         <button onClick={this.current}> Current Location </button>
//     </div>
//     )
    
//   }

// }

export default observer(Header);

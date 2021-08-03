import React from 'react';
import { observer } from "mobx-react-lite";
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Header ({store}) {

  return (
    <div data-testid="header-1" className="container">
        <Button onClick={() => store.fixed()} style={{marginTop: "400px", marginLeft: "600px", display: "inline", justifyContent: "center"}}> Fixed Location </Button>
        <Button variant="info" onClick={() => store.current()} style={{display: "inline", marginTop: "400px", marginLeft: "50px"}} > Current Location </Button>
    </div>
    )
  
}

export default observer(Header);

import React from 'react';
import { observer } from "mobx-react-lite";
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Header ({store}) {

  return (
    <div className="container">
        <Button onClick={() => store.fixed()}> Fixed Location </Button>
        <Button variant="info" sty onClick={() => store.current()}> Current Location </Button>
    </div>
    )
  
}

export default observer(Header);

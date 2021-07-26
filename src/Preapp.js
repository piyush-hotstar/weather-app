import React from 'react';
import Store from './Store';
import App from './App';
import {observer} from 'mobx-react-lite';

function Preapp () {

    const store = new Store();
    return (
        <App store={store}/>
    )
    
}

export default observer(Preapp)
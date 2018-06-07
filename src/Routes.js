import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Route1 from './components/Route1';
import Route2 from './components/Route2';
import Route3 from './components/Route3';

function Routes() {
    return(
        <switch>
            <Route path='/1' component={Route1}/>
            <Route path='/2' component={Route2}/>
            <Route path='/3' component={Route3}/>
        </switch>
    )
}

export default Routes;
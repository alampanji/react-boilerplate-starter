import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideMenu from './App/Components/SideMenu';
import Login from './App/Containers/Login';

const Routes = ()=>{
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/dashboard' component={SideMenu} />
                </Switch>
                
            </div>
        </Router>
    )
}

export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';

function Routes () {
   
   return (
      <Switch>
      {
         routes.map((route, id)=> (
            <Route key={id} path={route.path} exact component={route.component} />   
         ))
      }
      </Switch>
        
   ); 
}

export default Routes;
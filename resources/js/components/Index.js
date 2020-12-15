import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import { routes } from '../routes';

function Index() {
   return (
      <div className="container">
         <Router history={history}>
            <Switch>
               {
                  routes.map((route, id)=> (
                     <Route key={id} path={route.path} exact component={route.component} />   
                  ))
               }
            </Switch>
         </Router>
      </div>
   );
}

export default Index;

if (document.getElementById('react-app')) {
   ReactDOM.render(<Index />, document.getElementById('react-app'));
}

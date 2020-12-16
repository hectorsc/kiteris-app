import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';

function Index() {
   return (
      <App /> 
   );
}

export default Index;

if (document.getElementById('react-app')) {
   ReactDOM.render(<Index />, document.getElementById('react-app'));
}

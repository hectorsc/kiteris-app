import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
   
   render() {
      return (
         <div className="card">
            <div className="card-header">KITERIS APP</div>
            <div className="card-body">
               <Link to='/category' className="btn btn-primary">
                  Categorías
               </Link>
               &nbsp;
               <Link to='/product' className="btn btn-primary">
                  Productos
               </Link>
            </div>
         </div>
      ); 
   }
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
   
   render() {
      return (
         <React.Fragment>
            <h1 className="ui header">Panel de control</h1>
            <div className="ui segment">
               <p>BIENVENIDO AL BACKEND DE REACT-APP</p>
               <p>Eliga entre las siguiente opciones para ir creando el contenido de la App.</p>
               <p>Disfrute!</p>
            </div>
            <div className="card">
               <div className="card-header">PRODUCTOS</div>
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
            <div style={{ padding:'10px' }}></div>
            <div className="card">
               <div className="card-header">NOTICIAS</div>
               <div className="card-body">
                  <Link to='/tag' className="btn btn-primary">
                     Etiquetas
                  </Link>
                  &nbsp;
                  <Link to='/post' className="btn btn-primary">
                     Noticias
                  </Link>
               </div>
            </div>
         </React.Fragment>
      ); 
   }
};

export default Home;

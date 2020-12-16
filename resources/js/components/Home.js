import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
   
   render() {
      return (
         <div className="">
            <h1 className="ui header">Panel de control</h1>
            <div className="ui segment">
               <h4>BIENVENIDO AL BACKEND DE REACT-APP</h4>
               <p>Eliga entre las diferentes opciones del menú para ir creando el contenido de la App.</p>
               <p>Disfrute!</p>
            </div>
         </div>
      ); 
   }
};

export default Home;

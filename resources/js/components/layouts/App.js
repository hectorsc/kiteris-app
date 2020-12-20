import React from 'react';
import '../../../../public/css/simple-sidebar.css';
import { NavLink, Router } from 'react-router-dom';
import Routes from './Routes';
import history from '../../history';

class App extends React.Component {

   state = { menu: ''}

   onClickMenuChange = () => {
      let menu = this.state.menu === 'toggled' ? '' : 'toggled';
      this.setState({ menu });
   }

   render() {
      const { menu } = this.state;
      return (
         <Router history={history}>
            <div className={`d-flex ${menu}`} id="wrapper">
               <div className="bg-light border-right" id="sidebar-wrapper">
                  <div className="sidebar-heading">Menú </div>
                  <div className="list-group list-group-flush">
                     <NavLink to='/home' className="list-group-item list-group-item-action">Home</NavLink>
                     <NavLink to='/category' className="list-group-item list-group-item-action">Categorías</NavLink>
                     <NavLink to='/product' className="list-group-item list-group-item-action">Productos</NavLink>
                     <NavLink to='/tag' className="list-group-item list-group-item-action">Etiquetas</NavLink>
                     <NavLink to='/post' className="list-group-item list-group-item-action">Noticias</NavLink>
                  </div>
               </div>
               <div id="page-content-wrapper">
                  <nav className="navbar navbar-mobile navbar-expand-lg navbar-light bg-light border-bottom">
                  <button 
                     className="btn btn-primary" 
                     id="menu-toggle"
                     onClick={this.onClickMenuChange}
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  </nav>
                  <div className="container-fluid">
                     <div className="container" style={{ marginTop: '30px' }}>
                        <Routes />
                     </div>
                  </div>
               </div>
            </div> 
         </Router>
      );
   }
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../api/crudActions';
import DataTable from '../DataTable';

class ProductList extends React.Component {
   
   fetchProducts = async () => {
      return await fetchAllData('product');
   }

   render() {
      return (
         <div className="card">
            <div className="card-header">
               LISTADO DE PRODUCTOS
               <Link to={'/product/new'} className="ui button right floated positive">Crear Producto</Link>
            </div>
            <div className="card-body">
               <DataTable 
                  data={this.fetchProducts} 
                  path={'product'}
                  sweetAlert={sweetAlert} 
               />
            </div>
         </div> 
      );
   } 
}

export const sweetAlert = {
   title: '¿Estás seguro de eliminar el producto ',
   finalTitle: '?',
   text: 'Una vez eliminado, ¡no podrá recuperar este producto!',
   exception: 'Ha ocurrido un error, por favor intentelo de nuevo.'
};

export default ProductList;
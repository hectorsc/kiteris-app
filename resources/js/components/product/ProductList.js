import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columns, sweetAlertProduct } from '../datatable/config';

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
                  columns={columns}
                  path={'product'}
                  sweetAlert={sweetAlertProduct} 
               />
            </div>
         </div> 
      );
   } 
}

export default ProductList;

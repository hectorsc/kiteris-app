import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columns, sweetAlertCategory } from '../datatable/config';

class CategoryList extends React.Component {

   fetchCategories = async () => {
      return await fetchAllData('category');
   }

   render() {
      return (
         <div className="card">
            <div className="card-header">
               LISTADO DE CATEGORÍAS
               <Link to={'/category/new'} className="ui button right floated positive">Crear Categoría</Link>
            </div>
            <div className="card-body">
               <DataTable 
                  data={this.fetchCategories} 
                  columns={columns}
                  path={'category'}
                  sweetAlert={sweetAlertCategory} 
               />
            </div>
         </div> 
      );
   }
}

export default CategoryList;

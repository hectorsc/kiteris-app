import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../api/crudActions';
import DataTable from '../DataTable';

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
                  path={'category'}
                  sweetAlert={sweetAlert} 
               />
            </div>
         </div> 
      );
   }
}

export const sweetAlert = {
   title: '¿Estás seguro de eliminar la categoría ',
   finalTitle: '?',
   text: 'Una vez eliminada, ¡no podrá recuperar esta categoría!',
   exception: 'La categoría ',
   finalException: ' no se puede eliminar porque tiene productos asociados. Por favor, elimine antes los productos que tengan esta categoría.'
};

export default CategoryList;

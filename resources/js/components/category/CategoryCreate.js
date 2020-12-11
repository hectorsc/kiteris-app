import React from 'react';
import CategoryForm from './CategoryForm';
import { create } from '../../api/crudActions';


class CategoryCreate extends React.Component {

   onSubmit = async formValues => {
      return await create('category', formValues);
   }

   render() {
      return (
         <div> 
            <h1 className="ui header">Crear Categoría</h1>
            <div className="ui segment">
               <CategoryForm onSubmit={this.onSubmit} />
            </div>  
         </div>
      );
   }
};

export default CategoryCreate;
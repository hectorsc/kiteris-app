import React from 'react';
import CategoryForm from './CategoryForm';
import { createCategory } from './../../api/categoryActions';


class CategoryCreate extends React.Component {

   onSubmit = async formValues => {
      return await createCategory(formValues);
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
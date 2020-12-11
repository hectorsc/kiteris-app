import React from 'react';
import ProductForm from './ProductForm';
import { create, fetchAllData } from '../../api/crudActions';

class ProductCreate extends React.Component {

   state = { categories: [], categoryEmpty: false }

   onSubmit = async formValues => {
      return await create('product', formValues);
   }

   async componentDidMount () {
      const response = await fetchAllData('category');
      this.setState({ categories: response, categoryEmpty: true }); 
   }

   render() {
      const { categories, categoryEmpty } = this.state;
      return (
         <div> 
            <h1 className="ui header">Crear Producto</h1>
            <div className="ui segment">
               <ProductForm onSubmit={this.onSubmit} categories={categories} />
            </div> 
            {
               categories.length == 0 && categoryEmpty &&
                  <div className="ui negative message">
                     <div className="header">
                        ATENCIÓN! NO EXISTEN CATEGORÍAS.
                     </div>
                     <p>Para poder crear un producto tiene que crear primero una categoría.</p>
                  </div>
            }
         </div>
      );
   }
};

export default ProductCreate;
import React from 'react';
import ProductForm from './ProductForm';
import { createProduct } from '../../api/productActions';
import { fetchCategories } from '../../api/categoryActions';


class ProductCreate extends React.Component {

   state = { categories: [], categoryEmpty: false }

   onSubmit = async formValues => {
      return await createProduct(formValues);
   }

   async componentDidMount () {
      const response = await fetchCategories();
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
                     <p>Para poder crear un producto tiene que crear primero una categorías.</p>
                  </div>
            }
         </div>
      );
   }
};

export default ProductCreate;
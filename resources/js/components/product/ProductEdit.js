import React from 'react';
import ProductForm from './ProductForm';
import { fetchProduct, editProduct } from '../../api/productActions';
import { fetchCategories } from '../../api/categoryActions';
import _ from 'lodash';

class ProductEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { product: [], categories: [] }; 
   }

   componentDidMount = async () => {
      const product = await fetchProduct(this.props.match.params.id);
      const categories = await fetchCategories();
      this.setState({ 
         product: _.pick(product, 'id', 'user_id', 'category_id', 'name', 'REF', 'price', 'offer_price'),
         categories: categories 
      });
   }

   onSubmit = async formValues => {
      return await editProduct(this.state.product.id, formValues);
   }

   render() {
      return (
         <div> 
            <h1 className="ui header">Editar Categoría</h1>
            <div className="ui segment">
               <ProductForm 
                  onSubmit={this.onSubmit} 
                  initialValues={this.state.product} 
                  categories={this.state.categories}
               />
            </div>  
         </div> 
      );
   }
};

export default ProductEdit;
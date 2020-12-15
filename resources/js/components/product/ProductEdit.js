import React from 'react';
import ProductForm from './ProductForm';
import { fetchAllData, fetchData, edit } from '../../api/crudActions';
import _ from 'lodash';
import history from '../../history';

class ProductEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { product: [], categories: [] }; 
   }

   componentDidMount = async () => {
      const product = await fetchData('product', this.props.match.params.id);
      if (product.exception) history.push('/page-404');
      const categories = await fetchAllData('category');
      this.setState({ 
         product: _.pick(product, 'id', 'user_id', 'category_id', 'name', 'REF', 'price', 'offer_price'),
         categories 
      });
   }

   onSubmit = async formValues => {
      return await edit('product', this.state.product.id, formValues);
   }

   render() {
      return (
         <div> 
            <h1 className="ui header">Editar Producto</h1>
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

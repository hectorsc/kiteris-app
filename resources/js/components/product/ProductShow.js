import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../../api/productActions';

class ProductShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         product: [],
         loading: true
      };
   }

   async componentDidMount() {
      const response = await fetchProduct(this.props.match.params.id);
      this.setState({ product: response, loading: false });
   }

   render() {
      const { product } = this.state;
      return (
         <div className="ui card" style={{ width: '100%' }}>
            <div className="content">
               <div className="header">{product.name}</div>
            </div>
            <div className="content"> 
               <div className="my-list-divided ui list divided segment" style={{ padding: '10px'}} >
                  <div className="item" key={product.id}>
                     <div className="content" style={{ paddingTop: '10px' }}>
                     <strong>Categoría:</strong> {product.category && product.category.name} &nbsp; | &nbsp; 
                     <strong>REF:</strong> {product.REF} &nbsp; | &nbsp; 
                     <strong>Precio:</strong> {product.price} &nbsp; | &nbsp;
                     <strong>Precio en oferta :</strong> {product.offer_price}
                     </div>
             </div>
               </div>
            </div>
            <div className="extra content">
               <Link to={'/product'} className="ui labeled icon button primary">
                  <i className="left arrow icon"></i>
                  Volver
               </Link>
            </div>
         </div>
      );
   }
};

export default ProductShow;
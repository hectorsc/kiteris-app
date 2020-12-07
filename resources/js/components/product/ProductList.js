import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../../api/productActions';
import swal from 'sweetalert';

class ProductList extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         categories: [], loading: true, 
         deleted: false, result: ''
      };
   }

   getProducts = async () => {
      const response = await fetchProducts();
      let result = response.length == 0 ? 'no hay resultados...': '';
      this.setState({
         categories: response, 
         loading: false,
         result
      }); 
   }

   async componentDidMount () {
      await this.getProducts();
   }

   async componentDidUpdate() {
      if (this.state.deleted) { 
         this.setState({deleted: false});
         await this.getProducts();
      }
   }

   async alert(id, product) {
      const willDelete = await swal({
         title: `¿Estás seguro de eliminar el producto ${product}?`,
         text: 'Una vez eliminado, ¡no podrá recuperar este producto!',
         icon: "warning",
         buttons: true,
         dangerMode: true
      });
      if (willDelete) {
         await deleteProduct(id);
         this.setState({deleted: true});
      } 
   }

   renderList() {
      return this.state.categories.map(category => {
         return(
            <div className="item" key={category.id}>
               <div className="right floated content">
                  <Link to={`/product/${category.id}`} className="ui icon button teal">
                     <i className="info icon"></i>
                  </Link>
                  <Link to={`/product/edit/${category.id}`} className="ui icon button primary">
                     <i className="edit icon"></i>
                  </Link>
                  <button 
                     className="ui icon button negative"
                     onClick={() => this.alert(category.id, category.name)}
                  >
                     <i className="trash alternate icon"></i>
                  </button>
               </div>
               <div className="content" style={{ paddingTop: '10px' }}>{category.name}</div>
            </div>
         );
      })
   }

   render() {
      return (
         <div className="card">
            <div className="card-header">
               LISTADO DE PRODUCTOS
               <Link to={'/product/new'} className="ui button right floated positive">Crear Producto</Link>
            </div>
            <div className="card-body">
            <div className="my-list-divided ui list divided segment" style={{ padding: '10px'}} >
               {this.state.loading ? 'loading...' : this.renderList()}
               {this.state.result}
            </div> 
            </div>
         </div>
         
      );
   }
};

export default ProductList;
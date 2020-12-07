import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories, deleteCategory } from '../../api/categoryActions';
import swal from 'sweetalert';

class CategoryList extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         categories: [], loading: true, 
         deleted: false, result: ''
      };
   }

   getCategories = async () => {
      const response = await fetchCategories();
      let result = response.length == 0 ? 'no hay resultados...': '';
      this.setState({
         categories: response, 
         loading: false,
         result
      }); 
   }

   async componentDidMount () {
      await this.getCategories();
   }

   async componentDidUpdate() {
      if (this.state.deleted) { 
         this.setState({deleted: false});
         await this.getCategories();
      }
   }

   async alert(id, category) {
      const willDelete = await swal({
         title: `¿Estás seguro de eliminar la categoría ${category}?`,
         text: 'Una vez eliminada, ¡no podrá recuperar esta categoría!',
         icon: "warning",
         buttons: true,
         dangerMode: true
      });
      if (willDelete) {
         const deleted = await deleteCategory(id);
         if (deleted.exception) {
            swal(`La categoría ${category} no se puede eliminar porque tiene productos asociados. Por favor, elimine antes los productos que tengan esta categoría.`, {
               icon: "warning",
            });
         }
         this.setState({deleted: true});
      } 
   }

   renderList() {
      return this.state.categories.map(category => {
         return(
            <div className="item" key={category.id}>
               <div className="right floated content">
                  <Link to={`/category/${category.id}`} className="ui icon button teal">
                     <i className="info icon"></i>
                  </Link>
                  <Link to={`/category/edit/${category.id}`} className="ui icon button primary">
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
               LISTADO DE CATEGORÍAS
               <Link to={'/category/new'} className="ui button right floated positive">Crear Categoría</Link>
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

export default CategoryList;
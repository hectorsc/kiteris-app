import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columnsPost, sweetAlertPost } from '../datatable/config';

class PostList extends React.Component {

   fetchPosts = async () => {
      return await fetchAllData('post');
   }

   render() {
      return (
         <div className="card">
            <div className="card-header">
               LISTADO DE NOTICIAS
               <Link to={'/post/new'} className="ui button right floated positive">Crear Noticia</Link>
            </div>
            <div className="card-body">
               <DataTable 
                  data={this.fetchPosts}
                  columns={columnsPost}
                  path={'post'}
                  sweetAlert={sweetAlertPost} 
               />
            </div>
         </div> 
      );
   }
}

export default PostList;

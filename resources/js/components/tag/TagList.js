import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columns, sweetAlertTag } from '../datatable/config';

class TagList extends React.Component {

   fetchTags = async () => {
      return await fetchAllData('tag');
   }

   render() {
      return (
         <div className="card">
            <div className="card-header">
               LISTADO DE ETIQUETAS
               <Link to={'/tag/new'} className="ui button right floated positive">Crear etiqueta</Link>
            </div>
            <div className="card-body">
               <DataTable 
                  data={this.fetchTags}
                  columns={columns} 
                  path={'tag'}
                  sweetAlert={sweetAlertTag} 
               />
            </div>
         </div> 
      );
   }
}

export default TagList;

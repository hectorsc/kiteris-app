import React from 'react';
import TagForm from './TagForm';
import { create } from '../../api/crudActions';


class TagCreate extends React.Component {

   onSubmit = async formValues => {
      return await create('tag', formValues);
   }

   render() {
      return (
         <div> 
            <h1 className="ui header">Crear Etiqueta</h1>
            <div className="ui segment">
               <TagForm onSubmit={this.onSubmit} />
            </div>  
         </div>
      );
   }
};

export default TagCreate;

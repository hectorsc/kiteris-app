import React from 'react';
import PostForm from './PostForm';
import { create, fetchAllData } from '../../api/crudActions';
import _ from 'lodash';


class PostCreate extends React.Component {

   state = { tags: [], tagEmpty: false }

   onSubmit = async formValues => {
      return await create('post', formValues);
   }

   async componentDidMount () {
      const response = await fetchAllData('tag');
      const tags =this.fixedDataForSelect(response);
      this.setState({ tags, tagEmpty: true });
   }

   fixedDataForSelect(tags) {
      let data = [];
      tags.map((tag) => {
         data = [ ...data, { value: tag.id, label: tag.name }];
      })
      return data;
   }

   render() {
      const { tags, tagEmpty } = this.state;
      return (
         <React.Fragment> 
            <h1 className="ui header">Crear Noticia</h1>
            <div className="ui segment">
               <PostForm 
                  onSubmit={this.onSubmit} 
                  tags={tags}
               />
            </div> 
            {
               tags.length == 0 && tagEmpty &&
                  <div className="ui negative message">
                     <div className="header">
                        ATENCIÓN! NO EXISTEN ETIQUETAS.
                     </div>
                     <p>Para poder crear una noticia tiene que crear primero una etiqueta.</p>
                  </div>
            }
         </React.Fragment>
      );
   } 
};

export default PostCreate;

import React from 'react';
import PostForm from './PostForm';
import { fetchAllData, fetchData, edit } from '../../api/crudActions';
import _ from 'lodash';
import history from '../../history';

class PostEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { post: [], tags: [], tagsActive: [] }; 
   }

   componentDidMount = async () => {
      const post = await fetchData('post', this.props.match.params.id);
      if (post.exception) history.push('/page-404');
      const tags = await fetchAllData('tag');
      this.setState({ 
         post: _.pick(post, 'id', 'user_id', 'title', 'sub_title', 'body'),
         tags: this.fixedDataForSelect(tags),
         tagsActive: this.fixedDataForSelect(post.tags)
      });
   }

   fixedDataForSelect(tags) {
      let data = [];
      tags.map((tag) => {
         data = [ ...data, { value: tag.id, label: tag.name }];
      })
      return data;
   }

   onSubmit = async formValues => {
      return await edit('post', this.state.post.id, formValues);
   }

   render() {
      const { post, tags, tagsActive} = this.state;
      return (
         <div> 
            <h1 className="ui header">Editar Noticia</h1>
            <div className="ui segment">
               <PostForm 
                  onSubmit={this.onSubmit} 
                  initialValues={post} 
                  tags={tags}
                  tagsActive={tagsActive}
               />
            </div>  
         </div> 
      );
   }
};

export default PostEdit;

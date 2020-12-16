import React from 'react';
import TagForm from './TagForm';
import { fetchData, edit } from '../../api/crudActions';
import _ from 'lodash';
import history from '../../history';

class TagEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { response: [] }; 
   }

   componentDidMount = async () => {
      const response = await fetchData('tag', this.props.match.params.id);
      response.exception && history.push('/page-404');
      this.setState({ response: _.pick(response, 'id', 'user_id', 'name') });
   }

   onSubmit = async formValues => {
      return await edit('tag', this.state.response.id, formValues);
   }

   render() {
      return (
         <div> 
            <h1 className="ui header">Editar Etiqueta</h1>
            <div className="ui segment">
               <TagForm 
                  onSubmit={this.onSubmit} 
                  initialValues={this.state.response} 
               />
            </div>  
         </div> 
      );
   }
};

export default TagEdit;

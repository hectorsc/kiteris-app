import React from 'react';
import CategoryForm from './CategoryForm';
import { fetchData, edit } from '../../api/crudActions';
import _ from 'lodash';
import history from '../../history';

class CategoryEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { response: [] }; 
   }

   componentDidMount = async () => {
      const response = await fetchData('category', this.props.match.params.id);
      response.exception && history.push('/page-404');
      this.setState({ response: _.pick(response, 'id', 'user_id', 'name') });
   }

   onSubmit = async formValues => {
      return await edit('category', this.state.response.id, formValues);
   }

   render() {
      return (
         <div> 
            <h1 className="ui header">Editar Categoría</h1>
            <div className="ui segment">
               <CategoryForm 
                  onSubmit={this.onSubmit} 
                  initialValues={this.state.response} 
               />
            </div>  
         </div> 
      );
   }
};

export default CategoryEdit;

import React from 'react';
import CategoryForm from './CategoryForm';
import { fetchCategory, editCategory } from './../../api/categoryActions';
import _ from 'lodash';

class CategoryEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { response: [] }; 
   }

   componentDidMount = async () => {
      const response = await fetchCategory(this.props.match.params.id);
      this.setState({ response: _.pick(response, 'id', 'user_id', 'name') });
   }

   onSubmit = async formValues => {
      return await editCategory(this.state.response.id, formValues);
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
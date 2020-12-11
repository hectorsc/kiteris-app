import React from 'react';
import history from '../../history';

class CategoryForm extends React.Component {

   constructor(props) {
      super(props);
      this.initialStateValues = {
         fields: { name: '' },
         errors: ''
      };
      this.state = this.initialStateValues; 
   }

   //necesario para el editar
   componentDidUpdate(prevProps) {
      if (prevProps.initialValues !== this.props.initialValues) {
         this.setState({fields: {...this.props.initialValues}});
      }
   }
   
   onInputChange = event => {
      const { name, value } = event.target;
      this.setState(state => ({
         fields: {...state.fields, [name]: value},
         errors: {
            ...state.errors, 
            [name]: ''
         }
      }));
   };

   onFormSubmit = async event => {
      event.preventDefault();
      const response = await this.props.onSubmit(this.state.fields);
      if (response.errors) {
         this.setState({ errors: response.errors})
         return
      }
      history.push('/category');
   }

   render() {
      const {errors, fields} = this.state;
      return (
         <form onSubmit={this.onFormSubmit} className="ui form">
            <div className=" field">
               <div className={errors.name ? 'field error' : 'field'}>
                  <label>Nombre:</label>
                  <input 
                     type="text" name="name" placeholder="Nombre" 
                     value={fields.name} 
                     onChange={this.onInputChange}
                  />
                  {
                     errors.name &&
                        <div className="ui pointing red basic label prompt">
                           {errors.name}
                        </div>
                  }
               </div>
            </div>
            <button className="ui button primary" type="submit">{this.props.initialValues ? 'Editar' : 'Crear' }</button>
         </form>
      );
   }
};

export default CategoryForm;
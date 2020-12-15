import React from 'react';
import history from '../../history';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

class PostForm extends React.Component {

   constructor(props) {
      super(props);
      this.initialStateValues = {
         fields: { title: '', sub_title: '', body: '', tags: '' },
         errors: ''
      };
      this.state = this.initialStateValues; 
   }

   //necesario para el editar
   componentDidUpdate(prevProps) {
      if (prevProps.initialValues !== this.props.initialValues) {
         this.setState({
            fields: { ...this.props.initialValues, tags: this.props.tagsActive }
         });
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

   onInputChangeSelect = (event, action) => {
      this.setState({
         fields: {...this.state.fields, [action.name]: event},
         errors: {...this.state.errors, [action.name]: ''}
      });
   };

   onFormSubmit = async event => {
      event.preventDefault();
      const response = await this.props.onSubmit(this.state.fields);
      if (response.errors) {
         this.setState({ errors: response.errors})
         return
      }
      history.push('/post');
   }

   render() {
      const {errors, fields} = this.state;
      return (
         <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="two fields">
               <div className={errors.title ? 'field error' : 'field'}>
                  <label>Título</label>
                  <input 
                     type="text" name="title" placeholder="Título" 
                     value={fields.title} 
                     onChange={this.onInputChange}
                  />
                  {
                     errors.title && 
                        <div className="ui pointing red basic label prompt">
                           {errors.title}
                        </div>
                  }
               </div>
               <div className={errors.sub_title ? 'field error' : 'field'}>
                  <label>Subtítulo</label>
                  <input 
                     type="text" name="sub_title" placeholder="Subtítulo" 
                     value={fields.sub_title}
                     onChange={this.onInputChange}
                  />
                  {
                     errors.sub_title && 
                        <div className="ui pointing red basic label prompt">
                           {errors.sub_title}
                        </div>
                  }
               </div>
            </div>

            <div className="field">
               <div className={errors.body ? 'field error' : 'field'}>
                  <label>Contenido</label>
                  <textarea 
                     type="text" name="body" placeholder="Contenido"
                     value={fields.body} 
                     onChange={this.onInputChange}  
                  />
                  {
                     errors.body && 
                        <div className="ui pointing red basic label prompt">
                           {errors.body}
                        </div>
                  }
               </div>
            </div>
            <div className="field">
               <div className={errors.tags ? 'field error' : 'field'}>
                  <Select
                     name="tags" 
                     value={fields.tags} 
                     components={animatedComponents}
                     isMulti 
                     placeholder="Elige una o varias etiquetas..." 
                     onChange={this.onInputChangeSelect} 
                     options={this.props.tags}
                  />
                  {
                     errors.tags && 
                        <div className="ui pointing red basic label prompt">
                           {errors.tags}
                        </div>
                  }
               </div>
            </div>
            <button className="ui button primary" type="submit">{this.props.initialValues ? 'Editar' : 'Crear' }</button>
         </form>
         
      );
   }
};

export default PostForm;

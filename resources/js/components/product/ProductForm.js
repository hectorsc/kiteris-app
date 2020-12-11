import React from 'react';
import history from '../../history';

class ProductForm extends React.Component {

   constructor(props) {
      super(props);
      this.initialStateValues = {
         fields: { name: '', REF: '', price: '', offer_price: '', category_id: '' },
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
      history.push('/product');
   }

   render() {
      const {errors, fields} = this.state;
      return (
         <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="two fields">
               <div className={errors.name ? 'field error' : 'field'}>
                  <label>Nombre</label>
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
               <div className={errors.REF ? 'field error' : 'field'}>
                  <label>Referencia</label>
                  <input 
                     type="text" name="REF" placeholder="Referencia" 
                     value={fields.REF} 
                     onChange={this.onInputChange}
                  />
                  {
                     errors.REF && 
                        <div className="ui pointing red basic label prompt">
                           {errors.REF}
                        </div>
                  }
               </div>
            </div>

            <div className="two fields">
               <div className={errors.price ? 'field error' : 'field'}>
                  <label>Precio</label>
                  <input 
                     type="text" name="price" placeholder="Precio" 
                     value={fields.price} 
                     onChange={this.onInputChange} 
                  />
                  {
                     errors.price && 
                        <div className="ui pointing red basic label prompt">
                           {errors.price}
                        </div>
                  }
               </div>
               <div className={errors.offer_price ? 'field error' : 'field'}>
                  <label>Precio en oferta</label>
                  <input 
                     type="text" name="offer_price" placeholder="Precio en oferta"
                     value={fields.offer_price} 
                     onChange={this.onInputChange}  
                  />
                  {
                     errors.offer_price && 
                        <div className="ui pointing red basic label prompt">
                           {errors.offer_price}
                        </div>
                  }
               </div>
            </div>
            <div className={errors.category_id ? 'field error' : 'field'}>
               <select name="category_id" value={fields.category_id} onChange={this.onInputChange}>
                  <option value="">Elige categoría</option>
                  {this.props.categories.map(category => {
                     return (
                        <option key={category.id} value={category.id}>{category.name}</option>
                     )
                  })}
               </select>
               {
                  errors.category_id && 
                     <div className="ui pointing red basic label prompt">
                        {errors.category_id}
                     </div>
               }
            </div>
            <button className="ui button primary" type="submit">{this.props.initialValues ? 'Editar' : 'Crear' }</button>
         </form>
      );
   }
};

export default ProductForm;
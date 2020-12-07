import axios from 'axios';

export const fetchProducts = async () => {
   const response = await axios.get('/api/product');
   return response.data;   
};

export const fetchProduct = async id => {
   const response = await axios.get(`/api/product/${id}`);
   return response.data;
};

export const createProduct = async formValues => {
   try {
      const response = await axios.post('/api/product', {...formValues});
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const editProduct = async (id, formValues) => {
   try {
      const response = await axios.put(`/api/product/${id}`, formValues);
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const deleteProduct = async id => { 
   try {
      await axios.delete(`/api/product/${id}`);
   } catch (e) {
      console.log(e.response); 
   }
};
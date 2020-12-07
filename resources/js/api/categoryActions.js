import axios from 'axios';

export const fetchCategories = async () => {
   const response = await axios.get('/api/category');
   return response.data;   
};

export const fetchCategory = async id => {
   const response = await axios.get(`/api/category/${id}`);
   return response.data;
};

export const createCategory = async formValues => {
   try {
      const response = await axios.post('/api/category', {...formValues});
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const editCategory = async (id, formValues) => {
   try {
      const response = await axios.put(`/api/category/${id}`, formValues);
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const deleteCategory = async id => { 
   try {
      const response = await axios.delete(`/api/category/${id}`);
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};
import axios from 'axios';

export const fetchAllData = async path => {
   const response = await axios.get(`/api/${path}`);
   return response.data;   
};

export const fetchData = async (path, id) => {
   const response = await axios.get(`/api/${path}/${id}`);
   return response.data;
};

export const create = async (path, formValues) => {
   try {
      const response = await axios.post(`/api/${path}`, {...formValues});
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const edit = async (path, id, formValues) => {
   try {
      const response = await axios.put(`/api/${path}/${id}`, formValues);
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const deleted = async (path, id) => {
   try {
      const response = await axios.delete(`/api/${path}/${id}`);
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};
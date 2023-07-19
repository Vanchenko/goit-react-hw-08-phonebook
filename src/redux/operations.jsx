import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// EVA DB axios.defaults.baseURL = 'https://64b01d3dc60b8f941af54048.mockapi.io/api/v1/';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
     // console.log('oper fetch :', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', dataUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const existContacts = createAsyncThunk(
//   'contacts/existingContacts',
//   async (data, thunkAPI) => {
//     try {
//       const body = { name: data.name, number: data.number };
//       const response = await axios.patch(`/contacts/${data.id}`, body);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

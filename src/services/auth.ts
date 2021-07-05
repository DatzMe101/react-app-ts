import axios from 'axios';
import { Form } from '../pages/login';

export const login = (form: Form) => {
  return axios.post('https://reqres.in/api/login', form);
};

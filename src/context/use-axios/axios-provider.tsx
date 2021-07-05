import React from 'react';
import axios from 'axios';
import { AxiosContext } from './axios-context';

export const AxiosContextProvider: React.FC = ({ children }) => {
  const instance = axios.create({
    baseURL: 'https://reqres.in/api', // config.mycrmCore.baseurl,
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    },
  });
  return (
    <AxiosContext.Provider value={instance}>{children}</AxiosContext.Provider>
  );
};

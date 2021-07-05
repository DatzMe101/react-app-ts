import React from 'react';
import { AxiosInstance } from 'axios';

export const AxiosContext = React.createContext<AxiosInstance>(
  {} as unknown as AxiosInstance
);

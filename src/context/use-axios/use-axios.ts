import React from 'react';
import { AxiosContext } from './axios-context';

export const useAxios = () => React.useContext(AxiosContext);

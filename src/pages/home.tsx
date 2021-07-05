import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAxios } from './../context/use-axios/use-axios';

export const Home = () => {
  const history = useHistory();
  const axios = useAxios();

  useEffect(() => {
    axios.get('/users?page=2').then((data) => {
      debugger;
    });
  }, []);

  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }
  return <div>Home</div>;
};

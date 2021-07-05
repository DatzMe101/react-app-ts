import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';
import { AxiosContextProvider } from './context/use-axios/axios-provider';

ReactDOM.render(
  <React.StrictMode>
    <AxiosContextProvider>
      <Router>
        <App />
      </Router>
    </AxiosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

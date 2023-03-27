import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookList from './components/BookList';
import InfoCard from './components/InfoCard';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);


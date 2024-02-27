import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllMenu } from './components/AllMenuContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllMenu>
    <App />
    </AllMenu>
  </React.StrictMode>
);



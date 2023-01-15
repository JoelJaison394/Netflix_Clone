import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from "./context/authContext";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthContextProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
</AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

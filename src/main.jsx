import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './DataContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)

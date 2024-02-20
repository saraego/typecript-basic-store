import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './styles/global'
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';
import { AppProvider } from './hooks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
     <Routes/>
    </AppProvider>
    <Global/>
    <ToastContainer theme='dark' autoClose={3000}/>
  </React.StrictMode>,
)

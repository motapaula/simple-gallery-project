import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import SearchBar from './components/SearchBar.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandomPhoto from './components/RandomPhoto.tsx'
import { createApi } from 'unsplash-js'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Home />
    <SearchBar />
    <RandomPhoto />


  </React.StrictMode>,
);

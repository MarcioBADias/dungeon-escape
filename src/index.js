import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/home';
import Movie from './pages/movie';
import Search from './pages/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Movie/>}/>
        <Route path='search' element={<Search/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);


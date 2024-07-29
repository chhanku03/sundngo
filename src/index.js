import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from '../src/Component/HomePage';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import BlogPost from './Component/BlogPost';
import Volunteer from '../src/Component/Volunteer';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<App/>} >
      <Route path='' element={<HomePage/>} />
      <Route path='blog' element={<BlogPost/>}/>
      <Route path='volunteer' element={<Volunteer/>}/>


    </Route>
  )

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

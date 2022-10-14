import React from 'react';
import { lazy } from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
// import './index.css';
import './App.css';
import Loading from './components/Loading';
// import Parent from './components/Parent'


// import reportWebVitals from './reportWebVitals';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//   <App /> 
//   </>
// );

const ImApp = lazy(() => import('./App'));

// const ImApp = React.lazy(() => {
//   return new Promise((resolve => {
//     setTimeout(() =>{
//       resolve(import('./App'));
//     }, 3000);
//   }));
// })

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
     <BrowserRouter>
       <App />
     </BrowserRouter>   
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// createRoot.render(
//   // <React.Suspense fallback={<Loading/>}>
//   //     <ImApp /> 
//   // {/* <App></App> */}
//   // </React.Suspense>,
  
//   //document.getElementById('root')
// );


// reportWebVitals();

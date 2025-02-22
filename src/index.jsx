import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//         <App />
//   </React.StrictMode>
// )

import { hydrate, render } from "react-dom";
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
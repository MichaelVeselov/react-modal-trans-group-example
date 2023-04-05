import React from 'react';
import ReactDOM from 'react-dom/client';
import AppInline from './App-Trasition-Inline-Styles';
//import AppCSS from './App-Transition-CSS-Styles';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppInline />
    {/*     <AppCSS /> */}
  </React.StrictMode>
);

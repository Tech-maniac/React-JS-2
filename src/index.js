import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'

import Application from './AppFile'

//Method 1 : Using ReactDOM

// ReactDOM.render(
//   <h1>Hello world</h1>,
//   document.getElementById("root")
// )

//Method 2 : 
createRoot(document.getElementById("root")).render(
  <>
      <h1>Hi world</h1>
      <h1>Hello world</h1>
      <Application/>
  </>
);





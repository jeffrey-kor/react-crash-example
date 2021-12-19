import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from "./Welcome";
// import App from './App';

const element = <Welcome name="sara" />

ReactDOM.render(
  // <App />,
  element,
  document.getElementById('root')
);

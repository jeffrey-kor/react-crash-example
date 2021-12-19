import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

function formatName(user) {
  return user.firstName + " " + user.lastName
}

const user = {
  firstName: "Jeffrey",
  lastName: "Yoon"
}

const element = (
  <h1>Hello, {formatName(user)}</h1>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);

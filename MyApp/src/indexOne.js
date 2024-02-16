import React from 'react';
import  ReactDOM  from 'react-dom/client';

function Car(props) {
  return (
    <h2>Me the {props.color} car!</h2>
  )
}

function Garage() {
  return (
    <>
    <h2>Who lives in my garage</h2>
    <Car color = "red" />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

import React from "react";
import  ReactDOM  from "react-dom/client";
import Car from './Car.js';
function Garage() {
    const carInfo = {name: "Ford", model: "Mustang"};
    return (
        <>
        <h1>Who lives in my garage</h1>
        <Car brand={ carInfo.model } />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
import React from "react";
import ReactDom from "react-dom/client"


function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Football />);
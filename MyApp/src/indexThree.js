import React from "react";
import  ReactDOM  from "react-dom/client";

// car class component
class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
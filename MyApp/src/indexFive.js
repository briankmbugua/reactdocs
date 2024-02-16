import React from "react";
import ReactDom from "react-dom/client"


function Football() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shoot("Goal")}>Take the shot!</button>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Football />);
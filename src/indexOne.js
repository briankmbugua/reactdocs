import React from 'react'
import * as ReactDOM from 'react-dom';

// function tick(){
//     const element = <h1>{new Date().toLocaleTimeString()}</h1>
//     root.render(element)
// }

// setInterval(tick, 1000)
//a functional component called Welcome
//passing props to the component
//props.name
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
//an App component which has the welcome component nested inside
//In the welcome component we are passing the props to be in {props.name} e.g name="brian"
function App(){
    return(
        <div>
            <Welcome name="brian"/>
            <Welcome name="mbugua"/>
            <Welcome name="kinyanjui"/>
        </div>
    )
}

//creating the root
const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = <Welcome name="Sara" />//props object will have a name property and a value Sara,the props are passed 
//like html attributes 
//rendering the App component
root.render(<App/>);
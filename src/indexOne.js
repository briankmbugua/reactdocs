import React from 'react'
import * as ReactDOM from 'react-dom';

// function tick(){
//     const element = <h1>{new Date().toLocaleTimeString()}</h1>
//     root.render(element)
// }

// setInterval(tick, 1000)

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App(){
    return(
        <div>
            <Welcome name="brian"/>
            <Welcome name="mbugua"/>
            <Welcome name="kinyanjui"/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = <Welcome name="Sara" />//props object will have a name property and a value Sara,the props are passed 
//like html attributes 
root.render(<App/>);
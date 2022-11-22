import React from 'react'
import * as ReactDOM from 'react-dom';

const listdata = {
    firstName: "brian",
    secondName: "mbugua",
    age: 26
}

function List(props){
    return(
        <ul>
            <li>{props.firstName}</li>
            <li>{props.secondName}</li>
            <li>{props.age}</li>
        </ul>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<List 
firstName = {listdata.firstName}
secondName = {listdata.secondName}
age = {listdata.age} />)



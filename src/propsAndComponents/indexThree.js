import React from 'react'
import * as ReactDOM from 'react-dom';
//an object
const listdata = {
    firstName: "brian",
    secondName: "mbugua",
    age: 26
}
//functional compnent passing props to it
//props is an object in this case it will be the listdata object
function List(props){
    return(
        <ul>
            <li>{props.firstName}</li>//props.firstName is the same as listdata.firstName
            <li>{props.secondName}</li>
            <li>{props.age}</li>
        </ul>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
//rendering the list component and passing the props to it e.g firstName = {listdata.firstName}
root.render(<List 
firstName = {listdata.firstName}
secondName = {listdata.secondName}
age = {listdata.age} />)



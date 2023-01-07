import React from 'react'
import * as ReactDOM from 'react-dom/client';

//EMBEDDING map() in JSX
/*
in list and keys examples we declared a listitem variable and included it in jsx
 */

const numbers = [1,2,3,4,5];
 
function ListItem(props) {
    return <li>{props.value}</li>
}
/*
function NumberList(props) {
    const numbers = props.numbers;

    const listItems = numbers.map((number) => 
    <ListItem key = {number.toString()}
              value={number} />
    )

    return (
        <ul>
            {listItems}
        </ul>
    )
}
*/
//JSX allows embedding any expression in curly braces so we could inline
//the map() result.
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
            <ListItem key={number.toString()} value = {number} /> 
            )}
        </ul>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);
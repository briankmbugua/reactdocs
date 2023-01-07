import React from 'react'
import * as ReactDOM from 'react-dom/client';
//how to transform lists in javascript
//use the map() function to take an array of numbers
//and double their values

// const numbersArray = [1,2,3,4,5];
// const doubled = numbersArray.map((number) => number * 2);
// console.log(doubled);

//in React, transforming arrays into ists of elements is nearly indentical
//RENDERING MULTIPLE COMPONENTS
//you can build collections of elements and include them in jsx using curly braces {}
//below we loop through the numbers array using the javascript map() function.We return a <li>
//element for each item.Finally we assing the resulting array of elements to listItems:

 //const numbers1 = [1,2,3,4,5];

// const listItems = numbers.map((number)=> <li>{number}</li>);

//then we can include the entire listItems array inside of a <ul> element

//{/* <ul>{listItems}</ul> */}

//Usually you would render lists inside a component
//refactor the above example into a component that accepts an array of numbers and outputs a list
//of elements


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
    <li key = {number.toString()}> {/*assingning a key to our list items a key is 
                                    a special string attribute you need to include when creating
                                    lists of elements */}
    {number}
    </li>
    );
    return (
        <ul>{listItems}</ul>
    )
}
/*
The best way to pick a key is to use a string that uniquely identifies a list
item among it's siblings.Most often you would use ids from your database as keys
<li key = {todo.id}>
{todo.text}
</li> 

when you don't have stable IDs for rendered items, you may use the index as key as a last resort
<li key = {index}>
{todo.text}
</li>
we don't recommend using indexes for keys if the order of items may channge
if you chooe not to assing an explicit key list items then React will default to using
indexes as keys
*/

//KEYS
/*
Keys help react identify which items have changed,are added or are removed.Keys should be given to the
elements inside the array to give the elements a stable identity 
*/

const numbers = [1,2,3,4,5];
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ul>{listItems}</ul>);
root.render(<NumberList numbers={numbers}/>);
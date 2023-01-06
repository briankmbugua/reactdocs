import React from 'react'
import * as ReactDOM from 'react-dom/client';

/*
EXTRACTING COMPONENTS WITH KEYS
Keys ony make sense in the context of the sorrounding array
 if you extract a ListItem component, you should keep the key on
 the <ListItem /> elements in the array rather than on the
 <li> element in the ListItem itself
*/
//EXAMPLE:Incorrect key usage
const numbers = [1,2,3,4,5,6];
//const numbers2 = ['BRIAN','MBUGUA','KINYANJUI'];
// function ListItem(props) {
//     const value = props.value;
//     return(
//         //Wrong! Ther is no need to specify the key here
//         <li key={value.toString()}>
//             {value}
//         </li>
//     );
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => 
//     //Wrong! The key should have been specified here:
//     <ListItem value={number} />
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

function ListItem(props) {
    //const value = props.value;
    return(
        //Correct! Ther is no need to specify the key here
        <li>
            {props.value}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
    //Correct! The key should be specified here:
    <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    )
}

//A good rule of thumb is that elements inside the map() call need keys.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);
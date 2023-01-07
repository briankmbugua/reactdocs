import React from 'react'
import * as ReactDOM from 'react-dom/client';

/*
HTML form elements work differently from other DOM element in  react
coz form elements naturally keep some internal state
*/

// <form>
//     <label>
//         Name:
//         <input type="text" name="name" />
//     </label>
//     <input type="submit" value="Submit" />
// </form>

//Controled Component
/*
in HTML, form elements such as <input>, <textarea>, and <select>
typically maintain their own state and uodate it based on user input.
In React, mutable state is kept in the state property of components, and only update with setState()
we can combine the two by making React state be the only single source of truth
Then the React component that renders the form also controlls what happens in that forn on subseqquent user input
An input form element whose value is controlled  React in this way is called a 'controlled component' 
*/
/*
the NameForm class component has state with a single field which represent the valie of text input
from the form

the component has two methods which are used to update the state and handle form submission respectively
handleChange is called whenever the value of the input elememt is changed and updates the 'value' state with
the new value

handleSubmit is called when the form is submitted and displays the current value of 'value' state
it also prevents the default behaviour of the form when submitted
*/


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

/*
since the value attribute is set on our form element, the displayed value will always be this.state.value, making
 the React state the source of truth, since handlechange runs on every keystroke to update the the react state
 the displayed value will change as the user types

 with controlled component, inputs value is always driven by the react state
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm/>)
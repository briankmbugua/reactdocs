import React from 'react'
import * as ReactDOM from 'react-dom';
/*
HANDLING EVENTS
Handling events with react is very similar to handling events on  DOM elements
There are some syntax differences
1.React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.
IN HTML
<button onclick="activateLasers()">Activate lasers</button>
IN REACT
<button onClick={activateLasers}>Activate Lasers</button> 
you cannot return false to prevent default behaviour like in html

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('you clicked submit');
    }

    return (
        <form onSubmit = {handleSubmit}>
        <button type="submit">Submit</button>
        </form>
    )
}

here e is a synthetic event
When using react you generally don't need to call addEventListerner to add
listeners to a DOM element after it is created, Insted just provide a listener when
the element is initially rendered
When you define a component using an ES6 class, a common pattern is for an event handler
to be a method on the class

*/

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        //This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toggle/>)

/*
be careful about the meaning of this in JSX callbacks.In javascript class methids are
not bound by default.
if you forget to bind this.handleClick and pass it to onClick, this will be undefined
when the function is actually called
*/
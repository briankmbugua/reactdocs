import React from 'react'
import * as ReactDOM from 'react-dom/client';
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
//to bind this you can either use public class fields which make sure this is bound
//and never lost when used in a callback
//you can also use bind() to make sure this is not lost
//you can also use arrow functions in the callback 

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        //using bind solution to make sure this is not lost in the callback
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

class LoggingButton extends React.Component {
    //this syntax ensures `this` is bound within handClick
    //this is public field syntax
    //the this keyword inside a method defined using the public class syntax
    //will always refer to the instance of the class this means you can use public
    //class syntax to bind this without the need of a .bind() method or an arrow
    //functio
    handleClick = () => {
        console.log('this is:', this);
    };

    render() {
        return (
            <button onClick={this.handleClick}>Click me</button>
        )
    }
}

class LogginBtn extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      //the problem with this syntax is that a different callback is created each time the LogginBtn
      //renders.
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Toggle/>)
// root.render(<LoggingButton/>)
root.render(<LogginBtn/>)

/*
be careful about the meaning of this in JSX callbacks.In javascript class methods are
not bound by default.
if you forget to bind this.handleClick and pass it to onClick, this will be undefined
when the function is actually called
*/

//PASSING ARGUMENTS TO EVENT HANDLERS
/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

<button onClick={this.deleteRow.bind(this, id)}></button> */

//the above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively
//in both cases the e argument representing the React event will be passed as a second argument after the ID
//With arrow functions we have to pass it explicitly, but with bind any further arguments are automatically forwaded

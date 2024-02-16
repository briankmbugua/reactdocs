# React Render HTML
React renders HTML to the web using a function called createRoot() and it's method render()

# The createRoot Function
The createRoot() function takes one argument, an HTML element.
The purpose of the function is to define the HTML element where a React component should be displayed.

# The render Method
The render() method is then called to define the React component that should be rendered.

# React JSX
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

# Expressions in JSX
With JSX you can write expressions inside curly braces {}
The expression can be a React variable, or property, or any other valid JavaScript expression.Jsx will execute the expression and return the result.

# Inserting a Large Block of HTML
To write HTML on multiple lines, put the HTML inside parentheses:
`jsx
const myElement = (
    <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cheries</li>
    </ul>
);
`
# One Top Level Element
The HTML code must be wrapped in ONE top level element.So if you like to write two paragraphs, you must put them inside a parent element, like a div element
`jsx
const myElement = (
    <div>
    <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cheries</li>
    </ul>
    <p>I am a paragraph</p>
    <p>I am a paragraph too.</p>
    </div>
);
`
Alternatively, you can use a "fragment" to wrap multiple lines.This will prevent unnecessarily adding extra nodes to the DOM.
A fragement looks like an empty HTML tag:`<></>`
`jsx
const myElement = (
    <>
    <p>one</p>
    <p>Two</p>
    </>
);
`
# Elements Must be closed.
JSX follows XML rules, and therefore HTML elements must be properly closed.
`close empty elements with />`
`jsx
const myElement = <input type = "text" />;
`
# Atrribute class = className

# Conditions - if statements
React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:
`jsx
const x = 5;
let text = "Goodbye";
if (x < 10>) {
    text = "Hello";
}

const myElement = <h1>{text}</h1>;
`
# or use ternary expression instead:
`jsx
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye">}</h1>;
`

# React Components
Components are like functions that return HTML elements.
Components are indepedent and reusable bits of code.They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
# function Component
A function component called Car
`js
function Car() {
    return <h2>Hi, I am a Car</h2>
}
`
# Rendering a Component
The component Car returns an <h2> element.
To use this component in your application, use similar syntax as normal HTML.

# Props
Components can be passed as props, which stands for properties.
Props are like function arguments, and you send them in component as attributes.

# Example
`jsx
Use an attribute to pass a colot to the Car component, and use it in the render() function.

function Car(props) {
    return <h2>I am a {props.color} car! </h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red" />);
`

# Compenets in Components
We can refer to components inside other components
## Example
### Use the Car component inside the Garage component
`jsx
function Car() {
    return <h2>I am a car!</h2>
}

function Garage() {
    return (
        <>
        <h1>Who lives in my Garage?</h1>
        <Car />
        </>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Garage />);
`
# components in Files
It is recommended to split your components into separate files.
To do that, create a new file with a .js extension and put the code inside it.
Note that the filename must start with an uppercase character.
# React props
Props are arguments passed into React components.
Props are passed to components via HTML attributes.

React props are like function arguments in javaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes
`jsx
//Adding a "brand" attribute to the Car element:
const myElement = <Car brand="Ford" />;

// The component receives the argument as a props object:
// Use the brand attribute in the component
function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
}
`
# Pass Data
Props are also how you pass data from one component to another, as parameters
`jsx
function Car(props) {
    return <h2>I am a {props.brand} !</h2>
}

function Garage() {
    const carName = "Ford"
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <Car brand={carName} />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
`
# Passing an object

`jsx
function Car(props) {
return <h2>I am a { props.brand.model }!</h2>;
}
function Garage() {
const carInfo = { name: "Ford", model: "Mustang" };
return (
<>
<h1>Who lives in my garage?</h1>
<Car brand={ carInfo } />
</>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

`


# React Events
React can perform actions based on user events.
React has the same events as HTML.
# Adding Events
React events are written in camelCase syntax:
`onClick` instead of `onclick`

React event handlers are written inside curly braces:
`onClick={shoot}` instead of  `onclick="shoot()"`

# React
<button onClick={shoot}>Take the shot!</button>
# HTML
<button onclick = "shoot()">Take the Shot!</button>
# Example
Put te `shoot` function inside the `Football` component
`jsx
function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button onClick = {shoot}>Take the shot!</button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
`

# Passing Arguments
To pass an argument to an event handler, use an arrow function.
# Example
Send goal as a parameter to the shoot function.using arrow function.
# Why use arrow function within an event handler in React
`
function Football() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    )
}
`
- Implicit this Binding:Unlike regular functions, arrow function inherit the this context from their sorrounding scope, eliminating the need for explicit binding using techniques like .bind().In this code the shoot function will have access to the component's this context directly within the arrow function.
- Preventing Memory Leaks: In event handlers, using regular functions with .bind() can create unnecessary memory leaks, as each bind creates a new function reference.Arrow functions avoid this by implicitly binding this.
# Key considerations
- Performance Differences: In highly performance-critical scenarios, you might prefer regular functions for slightly better optimization.

# Example with regular functions
`jsx
function Football() {
    const shoot  = function(a) {
        alert(a);
    };

    return (
        <button onClick = {shoot.bind(this, "Goal")}>Take the shot!</button>
    );
}
`
# React Event Object
Event handlers have access to the React event that triggered the function.
Arrow Function:Sending the event object manually.
`jsx
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    This comes in handy when used with forms.
    */
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
`


# React Conditional Rendering
In React, you can conditionally render components.
# if statement
We can use the if JavaScript operator to decide which component to render.

# Example
We'll use these two components:

`
function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}
`
Now create another component that chooses what to render based on a condition:
`jsx
function Goal(props) {
    const isGoal = props.isGoal;
    if(isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}
`

# Logical && Operator
Another way to conditionally render a React component is by using the && operator
We can embed javascript code in JSX by using curly braces:

`jsx
function Garage(props) {
    const cars = props.cars;
    return (
        <>
        <h1>Garage</h1>
        {cars.length > 0 &&
        <h2>
        You have {cars.length} cars in your garage.
        </h2>
        }
        </>
    )
}

const cars = ['ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars = {cars} />);
`
# Ternary Operator
Another way to conditionally render elements is by using a ternary operator.
`javaScript
condition ? true: false

// Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component.

function Goal(props) {
    const isGoal = props.isGoal
    return (
        <>
        {isGoal ? <MadeGoal />: <MissedGoal />}
        </>
    );
}
`

# React Lists
In React, you will render lists with some type of loop
The JavaScript map() array method is generally the prefered method.

# Example
render all cars in the cars array
`JavaScript
function Car(props) {
    return <li>I am a {props.brand}</li>;
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];

    return (
        <>
        <h1>Who lives in my garage</h1>
        <ul>
        {cars.map((car) => <Car brand={car} />)}
        </ul>
        </>
    );
}
`

# React Lists
In react, you will render lists with some type of loop.
The javascript map() array method is generally the prefered method.
# Render all cars
`JavaScript
function Car(props){
    return <li>I am {props.brand}</li>;
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];

    return( <>
    <h1>Who lives in my garage</h1>
    <ul>
    {cars.map((car) => <Car brand={car} />)}
    </ul>
            </>
            );
}
`
# Keys
Keys allow React to keep track of elements.This way, if an item is updated or removed, only this item will be re-rendered instead of the entire list.
Keys need to be unique to each sibling, But they can be duplicated globally.
`Generally the key should be a unique ID assinged to each item.As a last resort, you can use the array index as a key`

`JavaScript
function Car(props) {
    return <li>I am a {props.brand} </li>
}

function Garage() {
    const cars = [
        {id: 1, brand: 'FORD'},
        {id: 2, brand: 'BMW'},
        {id: 3}, brand: 'Audi'}
    ];

    return (
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
`

# React Forms

Jist like in HTML, React uses forms to allow users to interact with the web page.
# Adding Forms in React
## Example
Add a Form that allows users to enter their name:
`JavaScript
function MyForm() {
    return(
        <form>
        <label>Enter your name:
        <input type="text" />
        </label>
        </form>
    )
}
`
The above will works as normal, the form will submit and the page will refresh.This is the default behavior, this is not what we want to happend in React.
We want to prevent this default behavior and let React control the form.


# Handling Forms
Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components
When the data is handled by the components, all the data is stored in the component state.
You can control changes by adding event handlers in the `onChange` attribute
We can use the useState Hook to keep track of each inputs value and provide a 'single source of truth' for the entire application.

## Use the useState Hook to manage the input:
`JavaScript
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

function MyForm() {
    const [name, setName ] = useState("");

    return (
        <form>
        <label>Enter your name:
        <input type = "text" value={name} onChange={(e) => setName(e.target.value)}>
        </label>
        </form>
    )
}
`

















# React Hooks
Hooks allow us to "hook" into React features such as state and lifecycle methods.
 # Example of a hook
`JavaScript
 import React, {useState} from "react";
 import ReactDOM from "react-dom/client";

 function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
          >Blue</button>
        <button
          type="button"
          onClick={() => setColor("red")}
          >Red</button>
        <button
          type="button"
          onClick={() => setColor("pink")}
          >Pink</button>
        <button
          type="button"
          onClick={() => setColor("green")}
          >Green</button>
        </>
    );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
`
You must import Hooks from react.
Above we are using `useState` Hook to keep track of the application state.
State generally refers to application data or properties that need to be tracked.


# Hook Rules
Ther are 3 rules for hooks:
- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

# Custom Hooks
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

# React useState Hook
The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.

# import useState
To use the useState Hook, we first need to import it into our component.
`js
import { useState }from "react";
`
Notice that we are destructuring useState from react as it is a named export.

# Initialize useState
We initialize our state by calling useState in our function component
useState accepts an initial state and returns two values:
 - The current state.
 - A function that updates the state.

 # Intialize the state at the top of the function component
 `js
 import {useState} from "react";
 function FavoriteColor() {
    const [color, setColor] = useState("");
 }
 `
 Notice that again, we are destructring the returned values from useState.
 The first value, color, is our current state
 The second value, setColor, is the function that is used to update our state.
 `These names are variables that can be anything you would like
 Lastly, we set the intitial state to an empty string: `useState("")`


# Read State
We can now include our state anywhere in our component.
## Use the state variable in the rendered component.
`js
import { useState } from "react";
import ReactDOM from "react-dom/client";

const FavoriteColor() {
    const [color, setColor] = useState("red");

    return <h1>My favorite color is {color}!</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
`

# Update State

To update our state, we use our state update function.
`We should never directly update state Ex: color="red" is not allowed`
# Use a button to update the state
`js
import {useState} from "react";
import ReactDOM from "react-dom/client";


function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}>Blue</button>
        </>
    )
}
`

# How the above code works
At it's core, useState is a React hook, a special function that lets you manage state within a functional component.When you call useState("red"), it's not just creating a variable or an object; it's telling React
- Initialize a piece of state named color with the initial value "red";
- Allow updating this state later using the returned function setColor.
# setColor is a Closure
When useState returns an array with color and setColor, the setColor function remembers the specific state variable(color)it's associated with.This is called a closure in JavaScript.So even though it might look like a regular function passed around, it carries hidden information about the state it should modify.

# React Handles Updates
When you call setColor({"blue"}), you are esssentially telling React
- I want to update the state variable associated with setColor
- The new value for that state is "blue"
React recognizes this call thanks to the closure mentioned earlier.It knows that setColor is related to color state because of how it was created within useState

# Re-rendering
React the triggers a re-render of your component using the updated state value ("blue" in this case).This means that any part of your component that relies on color (like <h1>) will get re-rendered with the new value reflecting the color change.
# Summary
- useState creates a special function (setColor) connected to a specific state variable.
- When you call setColor, you're telling React to update that state.
- React knows which state to update thanks to the "closure" nature of the function.
- React then re-renders your component with the updated state.

# What Can State Hold
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects and any combination of these!
We could create multiple state Hooks to track individual values.
`JavaScript
import { useState } from "react";
import ReactDOM from "react-dom/client";
function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
`
Or, we can just use one state and include an object instead
`js
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
`

# Updating Objects and Arrays in State
When state is updated, the entire states get overwritten.
What if we only want to update the color of our car.
We can use the JavaScript spread operator to help us.


`jsx
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: "blue" }
        });
    }

    return (
        <h1>My {car.brand}</h1>
        <p>
        It is a {car.color} {car.model} from {car.year}.
        </p>
        <button type="button" onClick={updateColor}>Blue</button>
    )
}
`
Because we need the current value of state, we pass a function into our setCar function.This function receives the previous value.
We the return an object, spreading the previousState and overwritting only the color.
# Initial State:
- The useState hook creates a state varible called car and a function to update it setCar.
- The intial state of the car object is set to:
  {
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  }

# updateColor Function
- This function is triggered when the button is clicked.
- It uses the setCarr function, but in a special way:
  - it passes an arrow function to setCar that receives the current state(previousState).
  - This way, it can access the current values of the object's properties.
  - Inside the arrow function
     - The spread operator (...) is used to create a new object based on the previousState
     - The color property is explicitly changed to "blue"
     - This new object is returned and assinged back to the state using setCar
# Re-render
- Since the state has changed, React triggers a re-render of the component.
- In the JSX, the updated values of car(including the new blue car) are used to display the car information and button text.
# Summary
- setCar remembers the initial state object due to closure.
- The updateColor function uses the current state to create a new modified object with the changed color.
- This new object becomes the updated state, triggering a re-render with the new information.




















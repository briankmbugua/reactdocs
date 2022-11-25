import { render } from '@testing-library/react';
import React from 'react'
import * as ReactDOM from 'react-dom';
//state is similar to props but is private and
//fully controlled by the component
class Clock extends React.Component {
//a class constructor that assings the initial this.state
    constructor(props) {
//note how we pass props to the base constructor
//class components should always call the base constructor with props
        super(props);
        this.state = {date: new Date()};
    }
//we want to set up a timer whenever the clock is rendered to
//the DOM for the first time this is called "mounting"
//we also want to clear that timer whenever the DOM produced by the
//clock is removed, this is called "unmounting in react"
//componentWillUnmount and componentDidMount are called lifecycle methods
    componentWillUnmount() {
//this method runs after the component output has been rendered to the DOM
//this is a good place to the set up a timer

        this.timerId = setInterval(()=> this.tick(), 1000);

    }
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Clock/>)



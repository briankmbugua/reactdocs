import { render } from '@testing-library/react';
import React from 'react'
import * as ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
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

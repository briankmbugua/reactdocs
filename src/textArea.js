import React from 'react'
import * as ReactDOM from 'react-dom/client';

//THE TEXTAREA TAG
/*
in html, a <textarea> element defines its text by it's children
<textarea>
Hello there, this is some text in a text area
</textarea>

In React, a <textarea> uses a value attribute instead. 
This way, a form using <textarea> can be written very 
similarly to a form that uses single-line input
 */

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}

//this.state.value is initialized in the constructor, so that
//the text area starts off with some text in it.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EssayForm/>)
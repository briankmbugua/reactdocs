import React from 'react'
import * as ReactDOM from 'react-dom/client';

//The select Tag
/*
in html select creates a dropdown list
<select>
<option value="grapefruit">GrapeFruit</option>
<option selected value="coconut">coconut</option>
</select> 

the coconut option is initially selected, coz of the selected attribute
React, instead of using this selected attribute, uses a value attribute
on the root select tag. This is more convinient in a controlled component because you only need to
update it in one place
*/

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FlavorForm />)

/*
Overall, this makes it so that <input type="text">,<textarea>, and select all work very
similarly they all accept a value attribute that you can use to implement a controlled
component 
*/
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
    componentDidMount() {



                //this method runs after the component output has been rendered to the DOM
        //this is a good place to the set up a timer
        
        this.timerId = setInterval(()=> this.tick(), 1000);
        //note how we save the timer ID right on this(this.timerID)
        
    }
    componentWillUnmount() {
        //We will teardown the timer in in here
        clearInterval(this.timerId);
        
            }
    tick() {
        //this method called tick that the clock component
        //will run every second
        //it will use this.setState() to schedule updates to the component
        //local state
        this.setState({
            date: new Date()
        })
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

/*
1.When <Clock /> is passed to root.render(), React calls the constructor of the Clock component. 
Since Clock needs to display the current time, it initializes this.state with an object including 
the current time. We will later update this state.
2.React then calls the Clock component’s render() method. This is how React learns what should be
displayed on the screen. React then updates the DOM to match the Clock’s render output.
3.When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. 
Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
4.Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() 
with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render()
method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the 
render output will include the updated time. React updates the DOM accordingly.
5.If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped

USING STATE CORRECTLY
there are three things you should know obout state
1.DO NOT MODIFY STATE DIRECTLY
e.g this will not re-render the component
this.state.comment = 'hello'---this is wrong
INSTEAD USE setState()
this.setState({comment: 'Hello'}) ---this is right
THE ONLY PLACE YOU CAN ASSING this.state IS THE CONSTRUCTOR

STATE UPDATES MAY BE ASYNCHRONOUS
React may batch multiple setState() calls into a singe update for performance
Because this.props and this.state may be updated asynchronously, you should never
rely on their values for calculating the next state.
e.g the code below may fail to update the counter
//wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
to fix this use a second form of state that accepts a function rather than an object, That function will receiver
the previous state as firts argument, and the props at the time the update is applied as the second argument
//correct
this.setState((state, props)=>{
    counter: state.counter + props.increment
});

STATE UPDATES ARE MERGED
when you call setState(), React merges the object you provide into the current state
e.g you may contain several independent variables
constructor(props) {
    this.state = {
        posts: [],
        comment: []
    };
}

THEN YOU CAN UODATE THEM INDEPENDENTLY WITH SEPARATE setState() calls

componentDidMount() {
    fetchPosts().then(response => {
        this.setState({
            posts: response.posts
        });
    });
    fetchComments().then(response => {
        this.setState({
            comments: response.comments
        })
    })
}

the merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely
replaces this.state.comments

THE DATA FLOWS DOWN
Neither parent nor child components can know if a certain component is
stateful or stateless, and they sholdn't care whether it is defined as a function or a class
This is why state is always called local or enscapulated, it is not accessible to 
any component other than the one that owns it and sets it.
A component may choose to pass down it's state down as props to it's child components
<FormattedDate = date={this.state.date} /> this component will receive the date in it's props
and wouldn't know whether it came from the clock's state, from the clock's props, or
was typed by hand
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
this is commonly know as "top-down" or "unidirectional" data flow.
Any state is always owned by some specific component, and any data or UI
derived from that state can only affect components "below" them in the tree
*/



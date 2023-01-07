import React from "react";
import * as ReactDom from "react-dom/client"

//you can create distinct components that enscapulate behavior you need, then you can render only
//some of them depending on the state of your application
//conditional rendering in react works the same way conditions work in javascript
//use javascript operators like if or conditional operator to create elements representing the current state,
//and let react update the ui to match them

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>
}

//we create Greeting component that displays either of these components depending
//on whether a user is logged in.

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

//ELEMENT VARIABLES
/*
you can use variables to store elements.This can help you conditionally render a part of
the component while the rest of the output dosen't change 
*/
//consier these two new components representing logout and login buttons
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

//in the example below we will create a stateful component called loginControl
//it will render either <logginButton> or <logoutButton> depending on its current state
//it will also render a greeting
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
//another way of conditionally rendering inline elements is to use javascript conditional operator
//  condition ? true : false
    // render() {
    //     const isLoggedIn = this.state.isLoggedIn;
    //     return (
    //       <div>
    //         The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    //       </div>
    //     );
    //   }

      //it can also be used for larger expression although it's less obvious whats happening

    //   render() {
    //     const isLoggedIn = this.state.isLoggedIn;
    //     return (
    //       <div>
    //         {isLoggedIn
    //           ? <LogoutButton onClick={this.handleLogoutClick} />
    //           : <LoginButton onClick={this.handleLoginClick} />
    //         }
    //       </div>
    //     );
    //   }  
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<LoginControl/>);
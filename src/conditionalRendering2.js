import React from "react";
import * as ReactDom from "react-dom/client"


//you may embed Expressions in JSX by wraooing them in curly braces.
//this includes the javascript logical && operator. it can be handy for
//conditionally incluing an element
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>Hello</h1>
            {/*this below is an embeded expression in JSX*/}
            {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages</h2>}
            {/*
            it works because in jvascript true && expression always evaluates to expression
            and false && expression always evaluates to false
             */}
        </div>
    );
}



const messages = ['React', 'Re: React', 'Re:Re: React',30];

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Mailbox unreadMessages={messages}/>);
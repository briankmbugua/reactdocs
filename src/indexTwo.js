import React from 'react'
import * as ReactDOM from 'react-dom';
//function to format the date passed to localeDateString
function formatDate(date) {
    return date.toLocaleDateString();
  }
//Avatar functional component with the props object being passed
  function Avatar(props){
    return(
        <img className='Avatar'
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    )
  }
//UserInfo functional component with props being passed
  function UserInfo(props){
    return (
        <div className='UserInfo'>
        {/*the props.user here refers to the user passed as a property to the userInfo
        component */}
            <Avatar user={props.user} />
            <div className='UserInfo-name'>
                {props.user.name}
            </div>
        </div>
    )
  }
  //Comment functional compnent with the avatar component and userinfo component nested inside
  function Comment(props) {
    return (
      <div className="Comment">
      {/* here we are putting the property user in userinfo component
      this will be accesible to components nested inside the userinfo component*/}
      <UserInfo user={props.author}/> 
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }



const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };


const root = ReactDOM.createRoot(document.getElementById('root'));
//passing the comment prop to Comment component
root.render(
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}/>
)
import React from 'react'
import * as ReactDOM from 'react-dom/client';

/*
KEYS MUST ONLY BE UNIQUE AMONG SIBLINGS
Keys used within arrays shoud be unique among siblings.However, they
don't need to be globally unique
We can use the same keys when we produce two different arrays 

sidebar and content jsx elements have two different arrays produced from the
array map method/function

keys serve a hint to React but they don't get passed to your components, if you need the same
value in your component, pass it explicitly as a prop with a different name

const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
); 
The post component can read props.id but not props.key
*/

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post)=>
            <li key={post.id}>
            {post.title}
            </li>
            )}
        </ul>
    );

    const content = props.posts.map((post)=>
    <div key = {post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog posts={posts} />);
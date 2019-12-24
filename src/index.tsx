import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Image from 'react-bootstrap/Image';

import {Post} from './Post';
import {Filter} from './Filter';
import {SubIcon, Placement} from './SubIcon';

ReactDOM.render(<SubIcon
    name="test" 
    icon="/GlennSquare.jpg" 
    className="subreddit"
    positions={[Placement.Left, Placement.Right, Placement.Top, Placement.Bottom]}
/>, document.getElementById("subreddits"));
ReactDOM.render(<Filter default="Hot"/>, document.getElementById('sort-dropdown'));
ReactDOM.render([
    <Post sub={{name: "Test", icon: "/GlennSquare.jpg"}} title="An example post" content="Hello" upvotes={2400} comments={5600} fade={false}/>,
    <Post sub={{name: "Test", icon: "/GlennSquare.jpg"}} title="An example image post" content={
        <Image src="/GlennSquareSmall.jpg" alt="post content"/>} upvotes={1600} comments={2687} fade={false}/>,
    <Post sub={{name: "Test", icon: "/GlennSquare.jpg"}} title="An example image post" content={
        <Image src="/GlennSquare.jpg" alt="post content"/>} upvotes={1600} comments={2687} fade={true}/>
], document.getElementById('content'));
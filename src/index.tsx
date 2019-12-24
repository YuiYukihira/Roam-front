import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PostType } from './Post';
import {Filter} from './Filter';
import {Placement} from './SubIcon';
import { Content } from './Content';

ReactDOM.render(<Filter default="Hot"/>, document.getElementById('sort-dropdown'));
ReactDOM.render(<Content posts={[
    {
        sub: {name: "Test", icon: "/GlennSquare.jpg"},
        title: "An example post",
        content: {type: PostType.Text, content: "Hello"},
        upvotes: 2400,
        comments: 5600
    },
    {
        sub: {name: "Test", icon: "/GlennSquare.jpg"},
        title: "An example image post",
        content: {type: PostType.Image, content: "/GlennSquareSmall.jpg"},
        upvotes: 2400,
        comments: 5600
    },
    {
        sub: {name: "Test", icon: "/GlennSquare.jpg"},
        title: "An example big image post",
        content: {type: PostType.Image, content: "/GlennSquare.jpg"},
        upvotes: 2400,
        comments: 5600
    }
]} subreddits={[
    {name: "Test", icon: "/GlennSquare.jpg", className: "subreddit", positions: [Placement.Left, Placement.Right, Placement.Top, Placement.Bottom]}
]}/>, document.getElementById('content-sidebar-holder'));
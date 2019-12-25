import * as React from 'react';
import update from 'immutability-helper';

import { Content } from './Content';
import { Filter } from './Filter';
import { PostType, PostProps} from './Post';
import { SubIconProps } from './SubIcon';

interface AppState {
    posts: PostProps[];
    subreddits: SubIconProps[];
}

function GetPosts(): PostProps[] {
    return [{
        sub: {name: "Test", icon: "/GlennSquare.jpg"},
        title: "An example test",
        upvotes: 2400,
        comments: 1756,
        content: {type: PostType.Text, content: "Hello"}
    },
    {
        sub: {name: "Test 2", icon: "/GlennSquare.jpg"},
        title: "An example image post",
        upvotes: 3546,
        comments: 3457,
        content: {type: PostType.Image, content: "/GlennSquareSmall.jpg"}
    },
    {
        sub: {name: "Test 2", icon: "/GlennSquare.jpg"},
        title: "An example big image post",
        upvotes: 3546,
        comments: 3457,
        content: {type: PostType.Image, content: "/GlennSquare.jpg"}
    }
];
}

export class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {posts: GetPosts(), subreddits: []};
    }

    loadPosts = () => {
        console.log('Post loaded!')
        let newPosts = GetPosts();
        this.setState(update(this.state,
            {posts: {$push: newPosts}}));
    }

    render() {
        return <div>
            <div id="topbar">
                <img src="GlennSquare.jpg" id="logo" alt="Roam logo"/>
                <div>Account Stuff</div>
            </div>
            <div id="extrabar">
                <div id="sort">
                    <div>Sort: </div>
                    <Filter default="Hot"/>
                </div>
                <div id="newsbar"><div><div>news bar</div></div></div>
            </div>
            <div id="content-sidebar-holder">
                <Content posts={this.state.posts} subreddits={this.state.subreddits} loadFunc={this.loadPosts}/>
            </div>
        </div>
    }
}
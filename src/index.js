import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Image from 'react-bootstrap/Image';

import Post from './Post';
import Filter from './Filter';


ReactDOM.render(<Filter />, document.getElementById('sort-dropdown'));
ReactDOM.render(
[
    Post('/GlennSquare.jpg', 'An example post', 'Hello', '2.4k', '5.6k', false),
    Post('/GlennSquare.jpg', 'An example image post', <Image src="/GlennSquareSmall.jpg" alt="post-content" />, '2.4k', '5.6k', false),
    Post('/GlennSquare.jpg', 'An example big image post', <Image src="/Glenn.jpg" alt="post-content" />, '2.4k', '5.6k', true)
] , document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
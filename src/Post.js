import React from 'react';

import Image from 'react-bootstrap/Image';

function Post(subredditLogo, title, content, upvotes, comments, fade) {
    if (fade) {
        return (
            <div className="post">
                <div className="post-meta"><Image src={subredditLogo} alt="subredditLogo" roundedCircle/><div>{title}</div></div>
                <div className="post-body fade-away">{content}</div>
                <div className="post-options">
                    <div>
                        <div><img src="/angle-up-solid.svg" alt="upvote"/></div>
                        <div><img src="/angle-down-solid.svg" alt="downvote" width="10px"/></div>
                    </div>
                    <div>{upvotes}</div>|
                    <div>{comments} Comments</div>|
                    <div>Share</div>
                </div>
            </div>
        );
    }
    return (
        <div className="post">
            <div className="post-meta"><Image src={subredditLogo} alt="subredditLogo" roundedCircle/><div>{title}</div></div>
            <div className="post-body">{content}</div>
            <div className="post-options">
                <div>
                    <div><img src="/angle-up-solid.svg" alt="upvote"/></div>
                    <div><img src="/angle-down-solid.svg" alt="downvote" width="10px"/></div>
                </div>
                <div>{upvotes}</div>|
                <div>{comments} Comments</div>|
                <div>Share</div>
            </div>
        </div>
    );
}

export default Post;
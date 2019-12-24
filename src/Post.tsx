import * as React from 'react';

import {Placement, SubIcon} from './SubIcon';
import Image from 'react-bootstrap/Image';

function readablizeNumber(n: number): string {
    var s = ['', 'k', 'm', 'b']
    var e = Math.floor(Math.log(n) / Math.log(1000));
    return (n / Math.pow(1000, e)).toFixed(2) + s[e];
}

export interface SubInfo {
    name: string,
    icon: string
}

interface PostProps {
    sub: SubInfo,
    title: string,
    content: any,
    upvotes: number,
    comments: number,
    fade: boolean
}



export function Post(props: PostProps) {
    return <div className="post">
        <div className="post-meta">
            <SubIcon
            name={props.sub.name}
            icon={props.sub.icon}
            positions={[Placement.Right, Placement.Bottom, Placement.Top, Placement.Left]}
            />
        </div>
        <div className={`post-body ${props.fade ? "fade-away" : ""}`}>{props.content}</div>
        <div className="post-options">
            <div>
                <div><img src="/angle-up-solid.svg" alt="upvote" /></div>
                <div><img src="/angle-down-solid.svg" alt="downvote" width="10px"/></div>
            </div>
            <div>{readablizeNumber(props.upvotes)}</div>|
            <div>{readablizeNumber(props.comments)}</div>|
            <div>Share</div>
        </div>
    </div>;
}
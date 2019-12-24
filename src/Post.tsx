import * as React from 'react';
import * as _ from 'lodash';

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

export class Post extends React.Component<PostProps, string> {
    constructor(props: PostProps) {
        super(props);
        this.state = _.uniqueId('Post');
    }

    componentDidMount() {
        const height = document.getElementById(this.state)?.clientHeight;
        console.log(height);
        if (height != null && height >= 255) {
            document.getElementById(this.state)?.classList.add("fade-away")
        }
    }

    render() {
        return <div className="post">
        <div className="post-meta">
            <SubIcon
            name={this.props.sub.name}
            icon={this.props.sub.icon}
            positions={[Placement.Right, Placement.Bottom, Placement.Top, Placement.Left]}
            />
        </div>
        <div id={this.state} className="post-body">{this.props.content}</div>
        <div className="post-options">
            <div>
                <div><img src="/angle-up-solid.svg" alt="upvote" /></div>
                <div><img src="/angle-down-solid.svg" alt="downvote" width="10px"/></div>
            </div>
            <div>{readablizeNumber(this.props.upvotes)}</div>|
            <div>{readablizeNumber(this.props.comments)}</div>|
            <div>Share</div>
        </div>
    </div>;
    }
}
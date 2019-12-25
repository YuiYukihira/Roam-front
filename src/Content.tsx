import * as React from 'react';
import * as _ from 'lodash';
import update from 'immutability-helper';
import InfiniteScroll from 'react-infinite-scroller';

import Image from 'react-bootstrap/Image';

import { Post, PostProps } from './Post';
import { SubIcon, SubIconProps } from './SubIcon';

interface ContentState {
    preview: {enabled: boolean, src?: string},
}
interface ContentProps {
    posts: PostProps[],
    subreddits: SubIconProps[],
    loadFunc: () => any
}
export class Content extends React.Component<ContentProps, ContentState> {
    constructor(props: ContentProps) {
        super(props);
        this.state = {preview: {enabled: false}} as ContentState;
    }
    openPreview = (src: string) => {
        this.setState(update(this.state,
            {preview: {$set: {enabled: true, src: src}}}));
    }
    closePreview = () => {
        this.setState(update(this.state,
            {preview: {enabled: {$set: false}}}));
    }
    updatePreview = (src: string) => {
        if (this.state.preview.enabled && src === this.state.preview.src) {
            console.log('close');
            this.closePreview();
        } else {
            console.log('open ', src);
            this.openPreview(src);
        }
    }
    render() {
        console.log('new state:', this.state.preview)
        let posts = _.map(this.props.posts, (e) => <Post key={_.uniqueId("Post")} {...e} onClick={this.updatePreview}/>);
        let subreddits = _.map(this.props.subreddits, (e) => <SubIcon {...e}/>);
        return <div>
            <div id="content" className={this.state.preview.enabled?"content-thin":""}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.props.loadFunc}
                    hasMore={true}
                    //threshold={10}
                    loader={<div className="loader" key={0}>Loading...</div>}
                    useWindow={false}
                >
                    {posts}
                </InfiniteScroll>
            </div>
            <div id="image-display" className={this.state.preview.enabled?"image-display":""}>
            <Image src={this.state.preview.src} rounded/>
            </div>
            <div id="sidebar">
                <div id="side-extras">Some extra stuff probably</div>
                <div id="subreddits">
                    <div>Subs</div>
                    {subreddits}
                </div>
            </div>
        </div>;
    }
}
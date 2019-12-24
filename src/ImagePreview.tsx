import * as React from 'react';

interface ImagePreviewProps {
    src: string;
    enabled: boolean;
}
interface ImagePreviewState {
    src: string
    enabled: boolean;
}
export class ImagePreview extends React.Component<ImagePreviewProps, ImagePreviewState> {
    constructor(props: ImagePreviewProps) {
        super(props);
        this.state = props;
    }
    render() {
        return <div></div>
    }
}
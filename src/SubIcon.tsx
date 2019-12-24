import * as React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ToolTip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';

export enum Placement {
    Top = "top",
    Left = "left",
    Bottom = "bottom",
    Right = "right"
}

export interface SubIconProps {
    name: string,
    icon: string,
    className?: string,
    positions: Placement[]
}

export function SubIcon(props: SubIconProps) {
        const positions = props.positions;
        const position = positions.shift()
        return <OverlayTrigger placement={position} overlay={
            <ToolTip id={`tooltip-${props.name}`}>{props.name}</ToolTip>
        }
        popperConfig={
            {modifiers: {
                preventOverflow: {
                    boundariesElement: 'viewport'
                },
                flip: {
                    boundariesElement: 'srollParent',
                    behaviour: positions
                }
            }}
        }>
            <Image className={props.className} src={props.icon} alt={props.name} roundedCircle/>
        </OverlayTrigger>;
}
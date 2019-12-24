import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';


function SubIcon(name, icon, className, positions) {
    const position = positions[0];
    const poss = positions.pop(0);
    return (
        <OverlayTrigger
        placement={position}
            overlay={
                <Tooltip id={`tooltip-${name}`}>{name}</Tooltip>
            }
            popperConfig={
                {modifiers: {
                    preventOverflow: {
                        boundariesElement: 'viewport'
                    },
                    flip: {
                        boundariesElement: 'srollParent',
                        behaviour: poss
                    }
                }}
            }
        >
            <Image className={className} src={icon} alt={name} roundedCircle/>
        </OverlayTrigger>
    );
}

export default SubIcon;
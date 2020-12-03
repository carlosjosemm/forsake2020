import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarRow.css";

function SidebarRow(props) {
    //Icon is a component, it can't be called from props
    //so it must be stored in a variable to be called upon.
    const Icon = props.Icon;

    return (
    //Avatar is a component imported from Material-UI
    //as stated above (with tab) but Icon is not imported
    //because it is passed as an prop from the parent.
    
    //Components must be named with capital first letter to be
    //passed as props and be called with JSX, as seen below.
        <div className="sidebarRow">
            {props.src && <Avatar src={props.src} /> }
            {Icon && <Icon />}

            <h4>{props.title}</h4>
        </div>
    )
}

export default SidebarRow

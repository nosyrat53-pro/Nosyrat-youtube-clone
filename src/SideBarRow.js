import React from 'react';
import './SideBarRow.css';

const SideBarRow = (props) => {
    return(
        <div className={`row ${props.active && 'row__active'}`} title={props.text}>
            <div className="row__icon">{props.icon}</div>
            <h4 className="row__text">{props.text}</h4>
        </div>
    );
}

export default SideBarRow ;
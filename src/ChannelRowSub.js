import React from 'react';
import './ChannelRowSub.css';
import NetworkWifiOutlinedIcon from '@material-ui/icons/NetworkWifiOutlined';

const ChannelRowSub = (props) => {
    return(
        <div className={`rowsub ${props.live && 'pr-14'}`} title={props.text}>
            <img 
            className="rowsub__img"
            src={props.img}
            alt="" />
            <h4 className="rowsub__text">{props.text}</h4>
            <div className={`${props.newVid && 'newVid'}`} />
            {props.live && <NetworkWifiOutlinedIcon className="rowsub__online" />}
        </div>
    );
}

export default ChannelRowSub ;
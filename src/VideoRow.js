import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoRow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const VideoRow = ({views , subs , description , timestamp , channel , title , image , channelImg}) => {
    return(
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p>{views} • {timestamp}</p>
                <div className="videoRow__channel">
                    <Avatar className="videoRow__channelAvatar" src={channelImg} /> {channel} <CheckCircleIcon className="videoRow__channelCheck"/>
                </div>

                <p className="videoRow__description">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default VideoRow ;
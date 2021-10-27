import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import ChannelRowSub from './ChannelRowSub';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ChannelRow = ({
    image,
    channel,
    verified,
    subs,
    noOfVideos,
    description
    }) => {
    return(
        <div className="channelRow" title={channel}>

            <div className="channelRow__avatar">
                <Avatar 
                className="channelRow__logo" 
                alt={channel} 
                src={image} 
                />
            </div>


            <div className="channelRow__text">
                
                <div className="channel__textName">
                    <h4>{channel}</h4>
                    { verified && <CheckCircleIcon className="channel__textNameIcon"/>}
                </div>

                <p className="channelRow__infos">{subs} subscribers • {noOfVideos} videos</p>

                <p className="channelRow__desc">{description}</p>
            </div>

        </div>
    );
}

export default ChannelRow ;
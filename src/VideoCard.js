import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar' ;
import Grid from '@material-ui/core/Grid';

const VideoCard = ({image, title, channel, views, timestamp, channelImage }) => {
    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="videoCard">
                <img className="videoCard__thumbnail" src={image} alt="" />
                <div className="videoCard__info">
                    <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />

                    <div className="videoCard__text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p className="videoCard__views">{views}</p>
                        <p>{timestamp}</p>
                    </div>
                </div>
            </div>
        </Grid>
    );
}

export default VideoCard ;
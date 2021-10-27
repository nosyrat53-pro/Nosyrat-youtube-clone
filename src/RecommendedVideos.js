import React from 'react';
import './RecommendedVideos.css' ;
import Options from './Options' ;
import VideoCard from './VideoCard';
import Grid from '@material-ui/core/Grid';

const RecommendedVideos = (props) => {
    return(
        <div className="recommened">
            <Options />

            <div className="recommended__videos">
            <Grid container spacing={2}>
                <VideoCard 
                image="https://i.ytimg.com/vi/Pq7hXRkc_rQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLApqJv4w-qkXO8y6gav0pW3RWplHw"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQcZ8aAxexPJhQiG6v50Yqa2m1Lb9G2lEWNOul4=s68-c-k-c0x00ffffff-no-rj"
                title="LIVE: President Biden provides updates on Covid-19 response and vaccination program — 10/14/21"
                channle="CNBC Television"
                views="5K views"
                timestamp="Streamed 1 day ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/gooWdc6kb80/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCMF6mLbJyjnuAdOxrXNIJyYP6Z5g"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTw1BZMfZXP17LKQNqUFw-L_GkscYCBX7JyIEXB=s68-c-k-c0x00ffffff-no-rj"
                title="Playing with time"
                channle="Macro Room"
                views="8.9M views"
                timestamp="4 months ago"
                />   

                <VideoCard 
                image="https://i.ytimg.com/vi/ytQ5CYE1VZw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBGeR7pS-vJfRCLJNAF--m0StjJUgw"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTtHGqGWq1t4wS2RV7qFfp6OPzwaMPiP8sNoX1A=s68-c-k-c0x00ffffff-no-rj"
                title="Eminem - Till I Collapse [HD]"
                channle="msvogue23"
                views="663M views"
                timestamp="6 years ago"
                />      

                <VideoCard 
                image="https://i.ytimg.com/vi/7v-n6--HWmc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCTxbfThatokS4_619LYmkc2SK9KQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQGH-zJeBediUgcd2elU-gZbp19QPb8RPmeFdw2=s68-c-k-c0x00ffffff-no-rj"
                title="Electro Swing - Top 10 - The Best of the Most Motivated Dancers #neoswingR"
                channle="Vico Neo"
                views="1.9M views"
                timestamp="3 years ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/iGmk8SFGCAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLC7Nagn7kzIX1WnzpTia4B43qO_NQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSrX7Zp7KiZ0gqNsruaPCnd0-Jk9q12Sszn1l-S=s68-c-k-c0x00ffffff-no-rj"
                title="You don't know this theme, but it's beautiful, so I played it"
                channle="Piannodesos"
                views="3.5M views"
                timestamp="1 year ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/FFn3XL2Sdks/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAr_6PWyrqksGawobdcgBCB0oupOA"
                channelImage="https://yt3.ggpht.com/zsNY-kquMDbAsyBRpxKocwGsh3Q2c8MaeK0_C_WcaRF7_xyoMq4j7O-kT-c3h1xEqc1JEyTQsQ=s68-c-k-c0x00ffffff-no-rj"
                title="Alan Walker Style - Skyline | New Song 2021"
                channle="Walker Vibes"
                views="2.5K views"
                timestamp="2 weeks ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/UbixZZDjrdU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLANyem1Yt3KJ7aGL8NRAI2hlDvKtQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
                title="Build Instagram Clone with React Native for Beginners (Firebase + Formik + Yup)"
                channle="Clever Programmer"
                views="41K views"
                timestamp="Streamed 2 weeks ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/I4EWvMFj37g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDFDgBIXkA6jL5nkxB3ePIloFWCnA"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj"
                title="Bash in 100 seconds"
                channle="FireShip"
                views="281K views"
                timestamp="2 months ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/L_LUpnjgPso/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBVWRHhuaC74dzj9NxXuCXmf3wFrA"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRYkq4C8cKAxju8RCkf1_2uES-8z7QyiEhFXiIW=s68-c-k-c0x00ffffff-no-rj"
                title="Fireplace 10 hours full HD"
                channle="Fire place 10 hours"
                views="68M views"
                timestamp="5 years ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/KB9dso-h_Es/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCUZmi5jcsmi3WPFYPbBjY1-LYRGg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSlJyPOgBl0SABM9KDhW_ine70LXv4SJXbTyKHX1g=s68-c-k-c0x00ffffff-no-rj"
                title="Eminem - Lose Yourself (Remix) 2Pac, The Notorious B.I.G., Method Man, Ice Cube, Eazy-E, Dr. Dre"
                channle="RapMusicHD"
                views="51M views"
                timestamp="1 years ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/sjkrrmBnpGE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAQRRT8Ye_QdG3EiC6_M-UTLGNdug"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTnKZvRA6Owi38svQuY1-o0pRx_-hZOLkUDy3pF=s68-c-k-c0x00ffffff-no-rj"
                title="Ambient Study Music To Concentrate - 4 Hours of Music for Studying, Concentration and Memor"
                channle="Study Music"
                views="20M views"
                timestamp="1 year ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/GK4Pl-GmPHk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDUdseFeoqZQk0yjX3AKZLuJBlAUg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSr_UgsPStQLT4rv8oX8D_j7yq5AMYz7noK1oAYNg=s68-c-k-c0x00ffffff-no-rj"
                title="Build and sell your own API $$$ (super simple!)"
                channle="Code With Ania"
                views="482K views"
                timestamp="1 week ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/Pq7hXRkc_rQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLApqJv4w-qkXO8y6gav0pW3RWplHw"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQcZ8aAxexPJhQiG6v50Yqa2m1Lb9G2lEWNOul4=s68-c-k-c0x00ffffff-no-rj"
                title="LIVE: President Biden provides updates on Covid-19 response and vaccination program — 10/14/21"
                channle="CNBC Television"
                views="5K views"
                timestamp="Streamed 1 day ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/gooWdc6kb80/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCMF6mLbJyjnuAdOxrXNIJyYP6Z5g"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTw1BZMfZXP17LKQNqUFw-L_GkscYCBX7JyIEXB=s68-c-k-c0x00ffffff-no-rj"
                title="Playing with time"
                channle="Macro Room"
                views="8.9M views"
                timestamp="4 months ago"
                />   

                <VideoCard 
                image="https://i.ytimg.com/vi/ytQ5CYE1VZw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBGeR7pS-vJfRCLJNAF--m0StjJUgw"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTtHGqGWq1t4wS2RV7qFfp6OPzwaMPiP8sNoX1A=s68-c-k-c0x00ffffff-no-rj"
                title="Eminem - Till I Collapse [HD]"
                channle="msvogue23"
                views="663M views"
                timestamp="6 years ago"
                />      

                <VideoCard 
                image="https://i.ytimg.com/vi/7v-n6--HWmc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCTxbfThatokS4_619LYmkc2SK9KQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQGH-zJeBediUgcd2elU-gZbp19QPb8RPmeFdw2=s68-c-k-c0x00ffffff-no-rj"
                title="Electro Swing - Top 10 - The Best of the Most Motivated Dancers #neoswingR"
                channle="Vico Neo"
                views="1.9M views"
                timestamp="3 years ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/iGmk8SFGCAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLC7Nagn7kzIX1WnzpTia4B43qO_NQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSrX7Zp7KiZ0gqNsruaPCnd0-Jk9q12Sszn1l-S=s68-c-k-c0x00ffffff-no-rj"
                title="You don't know this theme, but it's beautiful, so I played it"
                channle="Piannodesos"
                views="3.5M views"
                timestamp="1 year ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/FFn3XL2Sdks/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAr_6PWyrqksGawobdcgBCB0oupOA"
                channelImage="https://yt3.ggpht.com/zsNY-kquMDbAsyBRpxKocwGsh3Q2c8MaeK0_C_WcaRF7_xyoMq4j7O-kT-c3h1xEqc1JEyTQsQ=s68-c-k-c0x00ffffff-no-rj"
                title="Alan Walker Style - Skyline | New Song 2021"
                channle="Walker Vibes"
                views="2.5K views"
                timestamp="2 weeks ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/UbixZZDjrdU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLANyem1Yt3KJ7aGL8NRAI2hlDvKtQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
                title="Build Instagram Clone with React Native for Beginners (Firebase + Formik + Yup)"
                channle="Clever Programmer"
                views="41K views"
                timestamp="Streamed 2 weeks ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/I4EWvMFj37g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDFDgBIXkA6jL5nkxB3ePIloFWCnA"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj"
                title="Bash in 100 seconds"
                channle="FireShip"
                views="281K views"
                timestamp="2 months ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/L_LUpnjgPso/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBVWRHhuaC74dzj9NxXuCXmf3wFrA"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRYkq4C8cKAxju8RCkf1_2uES-8z7QyiEhFXiIW=s68-c-k-c0x00ffffff-no-rj"
                title="Fireplace 10 hours full HD"
                channle="Fire place 10 hours"
                views="68M views"
                timestamp="5 years ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/KB9dso-h_Es/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCUZmi5jcsmi3WPFYPbBjY1-LYRGg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSlJyPOgBl0SABM9KDhW_ine70LXv4SJXbTyKHX1g=s68-c-k-c0x00ffffff-no-rj"
                title="Eminem - Lose Yourself (Remix) 2Pac, The Notorious B.I.G., Method Man, Ice Cube, Eazy-E, Dr. Dre"
                channle="RapMusicHD"
                views="51M views"
                timestamp="1 years ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/sjkrrmBnpGE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAQRRT8Ye_QdG3EiC6_M-UTLGNdug"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTnKZvRA6Owi38svQuY1-o0pRx_-hZOLkUDy3pF=s68-c-k-c0x00ffffff-no-rj"
                title="Ambient Study Music To Concentrate - 4 Hours of Music for Studying, Concentration and Memor"
                channle="Study Music"
                views="20M views"
                timestamp="1 year ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/GK4Pl-GmPHk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDUdseFeoqZQk0yjX3AKZLuJBlAUg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSr_UgsPStQLT4rv8oX8D_j7yq5AMYz7noK1oAYNg=s68-c-k-c0x00ffffff-no-rj"
                title="Build and sell your own API $$$ (super simple!)"
                channle="Code With Ania"
                views="482K views"
                timestamp="1 week ago"
                />

<VideoCard 
                image="https://i.ytimg.com/vi/Pq7hXRkc_rQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLApqJv4w-qkXO8y6gav0pW3RWplHw"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQcZ8aAxexPJhQiG6v50Yqa2m1Lb9G2lEWNOul4=s68-c-k-c0x00ffffff-no-rj"
                title="LIVE: President Biden provides updates on Covid-19 response and vaccination program — 10/14/21"
                channle="CNBC Television"
                views="5K views"
                timestamp="Streamed 1 day ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/gooWdc6kb80/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCMF6mLbJyjnuAdOxrXNIJyYP6Z5g"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTw1BZMfZXP17LKQNqUFw-L_GkscYCBX7JyIEXB=s68-c-k-c0x00ffffff-no-rj"
                title="Playing with time"
                channle="Macro Room"
                views="8.9M views"
                timestamp="4 months ago"
                />   

                <VideoCard 
                image="https://i.ytimg.com/vi/ytQ5CYE1VZw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBGeR7pS-vJfRCLJNAF--m0StjJUgw"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTtHGqGWq1t4wS2RV7qFfp6OPzwaMPiP8sNoX1A=s68-c-k-c0x00ffffff-no-rj"
                title="Eminem - Till I Collapse [HD]"
                channle="msvogue23"
                views="663M views"
                timestamp="6 years ago"
                />      

                <VideoCard 
                image="https://i.ytimg.com/vi/7v-n6--HWmc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCTxbfThatokS4_619LYmkc2SK9KQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQGH-zJeBediUgcd2elU-gZbp19QPb8RPmeFdw2=s68-c-k-c0x00ffffff-no-rj"
                title="Electro Swing - Top 10 - The Best of the Most Motivated Dancers #neoswingR"
                channle="Vico Neo"
                views="1.9M views"
                timestamp="3 years ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/iGmk8SFGCAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLC7Nagn7kzIX1WnzpTia4B43qO_NQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSrX7Zp7KiZ0gqNsruaPCnd0-Jk9q12Sszn1l-S=s68-c-k-c0x00ffffff-no-rj"
                title="You don't know this theme, but it's beautiful, so I played it"
                channle="Piannodesos"
                views="3.5M views"
                timestamp="1 year ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/FFn3XL2Sdks/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAr_6PWyrqksGawobdcgBCB0oupOA"
                channelImage="https://yt3.ggpht.com/zsNY-kquMDbAsyBRpxKocwGsh3Q2c8MaeK0_C_WcaRF7_xyoMq4j7O-kT-c3h1xEqc1JEyTQsQ=s68-c-k-c0x00ffffff-no-rj"
                title="Alan Walker Style - Skyline | New Song 2021"
                channle="Walker Vibes"
                views="2.5K views"
                timestamp="2 weeks ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/UbixZZDjrdU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLANyem1Yt3KJ7aGL8NRAI2hlDvKtQ"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
                title="Build Instagram Clone with React Native for Beginners (Firebase + Formik + Yup)"
                channle="Clever Programmer"
                views="41K views"
                timestamp="Streamed 2 weeks ago"
                />     

                <VideoCard 
                image="https://i.ytimg.com/vi/I4EWvMFj37g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDFDgBIXkA6jL5nkxB3ePIloFWCnA"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj"
                title="Bash in 100 seconds"
                channle="FireShip"
                views="281K views"
                timestamp="2 months ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/L_LUpnjgPso/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBVWRHhuaC74dzj9NxXuCXmf3wFrA"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRYkq4C8cKAxju8RCkf1_2uES-8z7QyiEhFXiIW=s68-c-k-c0x00ffffff-no-rj"
                title="Fireplace 10 hours full HD"
                channle="Fire place 10 hours"
                views="68M views"
                timestamp="5 years ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/KB9dso-h_Es/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCUZmi5jcsmi3WPFYPbBjY1-LYRGg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSlJyPOgBl0SABM9KDhW_ine70LXv4SJXbTyKHX1g=s68-c-k-c0x00ffffff-no-rj"
                title="Eminem - Lose Yourself (Remix) 2Pac, The Notorious B.I.G., Method Man, Ice Cube, Eazy-E, Dr. Dre"
                channle="RapMusicHD"
                views="51M views"
                timestamp="1 years ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/sjkrrmBnpGE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAQRRT8Ye_QdG3EiC6_M-UTLGNdug"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLTnKZvRA6Owi38svQuY1-o0pRx_-hZOLkUDy3pF=s68-c-k-c0x00ffffff-no-rj"
                title="Ambient Study Music To Concentrate - 4 Hours of Music for Studying, Concentration and Memor"
                channle="Study Music"
                views="20M views"
                timestamp="1 year ago"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/GK4Pl-GmPHk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDUdseFeoqZQk0yjX3AKZLuJBlAUg"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSr_UgsPStQLT4rv8oX8D_j7yq5AMYz7noK1oAYNg=s68-c-k-c0x00ffffff-no-rj"
                title="Build and sell your own API $$$ (super simple!)"
                channle="Code With Ania"
                views="482K views"
                timestamp="1 week ago"
                />
            </Grid>

            </div>
        </div>
    );
}

export default RecommendedVideos ;
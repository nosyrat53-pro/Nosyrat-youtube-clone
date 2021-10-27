import React from 'react';
import './SearchVideos.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow' ;

const SearchVideos = (props) => {
    return(
        <div className="SearchVideos">
            <div className="SearchVideos__filter" title="Open search filters">
                <TuneIcon /> 
                <h2>FILTER</h2>
            </div>

            <hr/>

            <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AKedOLQKHP9pwJfauRlPb7O7z_zfEg29VZWdahmJh_gmRw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Holako"
            verified={true}
            subs="35.9k"
            noOfVideos="422"
            description="-NADA (Official Audio) Prod By Flamy &amp; Brosky. Music Production: Flamy &amp; Brosky Lyrics : "
            />   

            <VideoRow 
            views="2.3M"
            timestamp="1 years ago"
            channel="freeCodeCamp.org"
            image="https://i.ytimg.com/vi/zOjov-2OZ0E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLB645vj4oCWTlrqqFLrztWCaa_zKw"
            title="Introduction to Programming and Computer Science - Full Course"
            description="In this course, you will learn basics of computer and computer science. The concepts you learn apply to any and all&nbsp;.."
            channelImg="https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="681k"
            timestamp="8 months ago"
            channel="Aaron jack"
            image="https://i.ytimg.com/vi/CIRGjwYgdT4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDi3g1uyMX7Ww3Em2K2x8CZwmX7JA"
            title="Programming vs coding - what's the differnce"
            description=" vs coding -- my take on the difference. &zwj;   Join Freemote, the Freelance Developer Bootcamp&nbsp;..."
            channelImg="https://yt3.ggpht.com/2Ic5G-MGcf0BGlxLo86TkUZILkxKCenzjCszCyVJSRcmn5xkEgtLgs4CBCkaK2YNoNdX4A66=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="1.1M"
            timestamp="6 days ago"
            channel="Joma tech"
            image="https://i.ytimg.com/vi/1fPWr0d5zBE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDngo2zlHqeC2CQ13yDoSPBSe6EAw"
            title="10 years of coding in 13 munites"
            description="0:00 Intro 0:51 Grow with Google 2:11 2012 3:24 2013 5:32 2014 6:51 2015 8:19 2016 9:08 2017 10:33 2018 11:28 2019 12:09&nbsp;..."
            channelImg="https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="484K"
            timestamp="2 years ago"
            channel="Web dev simplified"
            image="https://i.ytimg.com/vi/hQAHSlTtcmY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCQymDijlQAkxo4lhdSAPLfTM21KA"
            title="learn React in 30 munites"
            description="IMPORTANT: Full React Course: https://courses.webdevsimplified.com/learn-react-today In this video I will be covering all of the&nbsp;..."
            channelImg="https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="127K"
            timestamp="1 month ago"
            channel="clever Programmer"
            image="https://i.ytimg.com/vi/0mVbNp1ol_w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDVpWEmj6KCBMfx5_iSrh8PHRiYGA"
            title="ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022]"
            description="In this tutorial you're going to learn all about: Functional components in React JS Props and States in React JS Styling&nbsp;..."
            channelImg="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="3.6M"
            timestamp="3 years ago"
            channel="Jim.tv"
            image="https://i.ytimg.com/vi/l9nh1l8ZIJQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA8YVIf3LFYBx3hi6BqUNnBNsa0QQ"
            title="Programming / Coding / Hacking music vol.16 (CONNECTION LOST)"
            description="Track list : 1) 0:00 - 4:54 Mt Eden Dubstep - Still Alive 2) 4:55 - 7:52 Mire. - Bury 3) 7:55 - 11:13 Criar - 4th dimension 4) 11:10&nbsp;..."
            channelImg="https://yt3.ggpht.com/ytc/AKedOLRLLwKZPAC0lqMM8kQ-2a0Z6a5SC3Q3OB4sod2z=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="2M"
            timestamp="3 years ago"
            channel="Soft tech"
            image="https://i.ytimg.com/vi/hb7Q33ysCwI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDnhyhqR0LolwC_2pkPEcXuI4jwkw"
            title="Coding is not Difficult - Bill Gets"
            description="Hello Friends welcome to Soft Tech. In this video about big techies like Bill Gates,David Karp,Mark Zuckerberg Karlie Kloss&nbsp;..."
            channelImg="https://yt3.ggpht.com/ytc/AKedOLS9fcQC_jxe3ieZLzJ7IxwTwqLdq1cu7BXzFw=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="460K"
            timestamp="6 years ago"
            channel="Sparrow"
            image="https://i.ytimg.com/vi/2-VKC8g2u1Y/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0cQQUuW7JTngdbQsQZxfiQrRF1w"
            title="Programming / Coding / Hacking music vol.16 (CONNECTION LOST)"
            description="Track list : 1) 0:00 - 4:54 Mt Eden Dubstep - Still Alive 2) 4:55 - 7:52 Mire. - Bury 3) 7:55 - 11:13 Criar - 4th dimension 4) 11:10&nbsp;..."
            channelImg="https://yt3.ggpht.com/ytc/AKedOLRLLwKZPAC0lqMM8kQ-2a0Z6a5SC3Q3OB4sod2z=s68-c-k-c0x00ffffff-no-rj"
            />

            <VideoRow 
            views="843K"
            timestamp="7 months ago"
            channel="Kalle Hallden"
            image="https://i.ytimg.com/vi/QjMJsQx_O7o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBZNT94EiC-xJDhVl33Fq2U09bkkA"
            title="What a day in programmer life is actually like"
            description="What A Day In A Programmers Life Is Actually Like Get access to my programming courses: https://patreon.com/hallden Follow me ..."
            channelImg="https://yt3.ggpht.com/eWMyO-gUMQaXCUElBmHUbO8YKlur6erITgt0InT3hv0ABhRnDU6QgQrHXws38MlQut6edQRe=s68-c-k-c0x00ffffff-no-rj"
            />

        </div>
    );
}

export default SearchVideos ;
import React, { useState } from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow' ;
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import ChannelRowSub from './ChannelRowSub';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import SportsScoreOutlinedIcon from '@material-ui/icons/SportsBaseballOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { Link , BrowserRouter as Router} from 'react-router-dom' ;

const SideBar = (props) => {

    const [channelSub,setChannelSub] = useState([
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLRBU6q62KklAJtnlqOjqGZEP5iVATyvZ3qCFA10KQ=s88-c-k-c0x00ffffff-no-rj",
            text: "DarkCode",
            newVid: false,
            live: true 
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLSYy8NkhaejJ5UmxVV9Jy49V2tCUZ3wHRkvjic4PQ=s88-c-k-c0x00ffffff-no-rj" ,
            text: "Anthony Sistilli",
            newVid: true ,
            live: false
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLRy_PEs6XEYxfQJy6B95qNSsOxDCHvgOSvdtaROFQ=s88-c-k-c0x00ffffff-no-rj",
            text: "كبيرت+AJ",
            newVid: true,
            live: false 
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s88-c-k-c0x00ffffff-no-rj",
            text: "Joma Tech",
            newVid: true,
            live: false 
        },
        {
            img: "https://yt3.ggpht.com/gorbvRW0cx0bGsPcX5hXgZocDRVvoD07K58PLnnIpdML-KTvephUsxo2XGN0z0ZaU0JpZbEe=s88-c-k-c0x00ffffff-no-rj",
            text: "Alan Wallker",
            newVid: false,
            live: false 
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLSYy8NkhaejJ5UmxVV9Jy49V2tCUZ3wHRkvjic4PQ=s88-c-k-c0x00ffffff-no-rj" ,
            text: "Anthony Sistilli",
            newVid: true,
            live: false 
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj",
            text: "Clever Programmer",
            newVid: true ,
            live: false 
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLRBU6q62KklAJtnlqOjqGZEP5iVATyvZ3qCFA10KQ=s88-c-k-c0x00ffffff-no-rj",
            text: "DarkCode",
            newVid: false,
            live: false 
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLSYy8NkhaejJ5UmxVV9Jy49V2tCUZ3wHRkvjic4PQ=s88-c-k-c0x00ffffff-no-rj" ,
            text: "Anthony Sistilli",
            newVid: true ,
            live: false
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s88-c-k-c0x00ffffff-no-rj",
            text: "Joma Tech",
            newVid: true ,
            live: false
        },
        {
            img: "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj",
            text: "Clever Programmer",
            newVid: true ,
            live: false 
        },
    ]);

    const [renderTow,setRenderTow] = useState(true) ;

    window.addEventListener('resize' , () => {
        if(window.innerWidth >= 1000) {
            props.reference.current.classList.remove('show');
            props.reference.current.classList.remove('hide');
        }
    });

    return(
        <div className="sidebar" ref={props.reference} >

            <div className="sidebar__part">
                <SideBarRow icon={<HomeIcon/>} text="Home" active/>
                <SideBarRow icon={<ExploreOutlinedIcon/>} text="Explore"/>
                <SideBarRow icon={<SubscriptionsOutlinedIcon/>} text="Subscriptions"/>
            </div>

            <div className="sidebar__part">
                <SideBarRow icon={<VideoLibraryOutlinedIcon/>} text="Library" />
                <SideBarRow icon={<HistoryOutlinedIcon/>} text="History" />
                <SideBarRow icon={<OndemandVideoOutlinedIcon/>} text="Your videos" />
                <SideBarRow icon={<WatchLaterOutlinedIcon/>} text="Watch later" />
                <SideBarRow icon={<ThumbUpOutlinedIcon/>} text="Liked videos" />
                <SideBarRow icon={<KeyboardArrowDownOutlinedIcon/>} text="Show more" />
            </div>

            <div className="sidebar__part">
                <h4 className="sidebar__partSub">subscriptions</h4>

                {
                
                    renderTow ?   channelSub.slice(0,4).map((channel , index) => {
                        
                        return(
                            <ChannelRowSub 
                            img={channel.img} 
                            text={channel.text} 
                            newVid={channel.newVid}
                            key={index}
                            />
                        );
                    }) : 

                    channelSub.map((channel , index) => {
                        
                        return(
                            <ChannelRowSub 
                            img={channel.img} 
                            text={channel.text} 
                            newVid={channel.newVid}
                            live={channel.live}
                            key={index}
                            />
                        );
                    })
                }

                { renderTow ? 
                
                    <div  onClick={() => setRenderTow(!renderTow)}>
                        <SideBarRow 
                        icon={<KeyboardArrowDownOutlinedIcon/>} 
                        text={`${ renderTow ? `Show ${channelSub.length - 4} more` : 'Show fewer' }`} 
                        />
                    </div> : 

                    <>
                        <SideBarRow icon={<AddCircleOutlineOutlinedIcon />} text="Browse channels" />
                        <div  onClick={() => setRenderTow(!renderTow)}>
                            <SideBarRow 
                            icon={<KeyboardArrowDownOutlinedIcon/>} 
                            text={`${ renderTow ? `Show ${channelSub.length - 4} more` : 'Show fewer' }`} 
                            />
                        </div> 
                    </>

                }
                



            </div>

            <div className="sidebar__part">
                <h4 className="sidebar__partSub">more from youtube</h4>

                <SideBarRow icon={<TheatersOutlinedIcon />} text={"Films"} />
                <SideBarRow icon={<SportsEsportsOutlinedIcon />} text={"Gaming"} />
                <SideBarRow icon={<LiveTvOutlinedIcon />} text={"Live"} />
                <SideBarRow icon={<SportsScoreOutlinedIcon />} text={"Sport"} />

            </div>
                

            <div className="sidebar__part">

                <SideBarRow icon={<SettingsOutlinedIcon />} text="Settings" />
                <SideBarRow icon={<OutlinedFlagRoundedIcon />} text="Report history" />
                <SideBarRow icon={<HelpOutlineOutlinedIcon />} text="Help" />
                <SideBarRow icon={<ErrorOutlineOutlinedIcon />} text="Send feedback" />

            </div>

            <div className="sidebar__partLinks">
                <Router>
                    <Link to="/">About</Link>
                    <Link to="/">Press</Link>
                    <Link to="/">Copyright</Link>
                    <Link to="/">Contact us</Link>
                    <Link to="/">Creator</Link>
                    <Link to="/">Advertise</Link>
                    <Link to="/">Developers</Link>
                </Router>
            </div>

            <div className="sidebar__partLinks">
                <Router>
                    <Link to="/">Terms</Link>
                    <Link to="/">Privacy</Link>
                    <Link to="/">{`Policy ${'&'} safety`}</Link>
                    <Link to="/">How youtube works</Link>
                    <Link to="/">Test new features</Link>
                </Router>
            </div>

            <div className="sidebar__llc">
                &copy;2021 Nosyrat LLC Youtube clone , a Nosyrat Compnay
            </div>

        </div>
    );
}

export default SideBar ;
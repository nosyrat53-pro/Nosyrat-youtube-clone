import React, { useState , useRef} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom' ;
import SearchIcon from '@material-ui/icons/Search';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from '@material-ui/core/Button' ;

const Header = (props) => {

    const [input,setInput] = useState('');
    const linkRef = useRef();

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmite = (e) => {
        e.preventDefault();
        
        if(input !== ''){
            linkRef.current.click() ;
        }
    }

    const handleSideBar = () => {

        if(window.innerWidth > 1000 ) {

        }else {
            if(!props.reference.current.classList.contains('show')){
                props.reference.current.classList.remove('hide');
                props.reference.current.classList.add('show');
            }else {
                props.reference.current.classList.remove('show');
                props.reference.current.classList.add('hide');
            }
        }


    }

    return(


        <div className="header">

            <div className="header__rightIcons">

            <IconButton onClick={() => handleSideBar()}>
                <MenuIcon  className="header__darkIcons"/>
            </IconButton>
        
            <Link to="/" className="header__logo" title="YouTube Home"/>

            </div>

            <div className="header__middle">
                <form className="header__input" onSubmit={(e) => handleSubmite(e)}>

                    <div className="header__inputInput">           
                        <input value={input} onChange={(e) => handleChange(e)} type="text" placeholder="Search" />
                    </div>

                <div className="header__inputSearchIcon" title="Search">
                        <button type="submit">
                            <Link to={`/search/${input}`} ref={linkRef}>
                                <SearchIcon className="header__darkIcons"/>
                            </Link>
                        </button>
                    
                </div>
                
                </form>
              
                        <IconButton title="Search with your voice">
                            <KeyboardVoiceIcon className={`header__darkIcons voice`}/>
                        </IconButton>
                    
            </div>
            
            <div className="header__leftIcons">

            <IconButton title="Create">
                <VideoCallOutlinedIcon className="header__darkIcons"/>
            </IconButton>

                <IconButton title="YouTube apps">
                    <AppsOutlinedIcon className="header__darkIcons"/>
                </IconButton>

                <IconButton title="Notifications">
                    <NotificationsNoneOutlinedIcon className="header__darkIcons"/>
                </IconButton>

                <IconButton>
                    <AccountCircleOutlinedIcon className="header__darkIcons"/>
                </IconButton>

                </div>
          
        </div>
  
    );
}

export default Header;
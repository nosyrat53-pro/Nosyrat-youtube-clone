import React, { useState , useRef } from 'react' ;
import './Options.css';

const Options = (props) => {

    const optionsRef = useRef();
    const [transfrom,setTransform] = useState(0);

    const translateToLeft = () => {

        if( ( window.innerWidth + (-transfrom) -200 ) < optionsRef.current.offsetWidth ){
            const changes = transfrom - 150 ;
            optionsRef.current.style.transform = `translateX(${ changes + 'px'})` ;
            setTransform(changes);
        }

    }

    const translateToRight = () => {

        if( transfrom < 0 ){
            const changes = transfrom + 150 ;
            optionsRef.current.style.transform = `translateX(${ changes + 'px'})` ;
            setTransform(changes);
        }
    }

    return(
        <div className="options__container">

            <div className="options__containerPrevious" onClick={() => translateToLeft()} >{'<'}</div>
            <div className="options__containerNext" onClick={() => translateToRight()} >{'>'}</div>

            <div className="options" ref={optionsRef} >
                <div className="option active">All</div>
                <div className="option">Javascript</div>
                <div className="option">National Geographic Abu Dhabi</div>
                <div className="option">Music</div>
                <div className="option">Alan Walker</div>
                <div className="option">Krona</div>
                <div className="option">Python</div>
                <div className="option">Background music</div>
                <div className="option">History</div>
                <div className="option">Live</div>
                <div className="option">Military people</div>
                <div className="option">Sonatas</div>
                <div className="option">Electronic Dance Music</div>
                <div className="option">AirCrafts</div>
                <div className="option">Mixes</div>
                <div className="option">Electro Swing Music</div>
            </div>

        </div>
    );
}

export default Options; 
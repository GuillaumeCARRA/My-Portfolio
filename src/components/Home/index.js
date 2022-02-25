import React, { useEffect, useRef } from 'react';
import { Icon } from 'semantic-ui-react';
import { init } from 'ityped';

import './home.css'

function Home() {

    //useRef not cause my component to re update when it gets changed
    //it's not re render the JSX
    //I dont have an infinite loop with that
    //Actually returns an object with a property called current 
    //Example const renderCount=useRef(0) ---> {current: 0}
    const textRef = useRef('');

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            startDelay: 1000,
            backDelay: 1000, 
            backSpeed: 80, 
            strings: [
                "Développeur Web Junior.", 
                "Développeur Web React.", 
                "Développeur Web Front.", 
                "Développeur Web FullStack.",
            ]
        })
    }, [])


    return (
        <div className="home" id="home">
            <div className="home__container">
                <div className="home__content">
                    <div className="home__data">
                        <div className="home__title">
                            <h2>Bonjour, je suis</h2>
                            <h1>Guillaume CARRA</h1>
                            <h3>Je suis un <span ref={textRef}></span></h3>
                        </div>
                            <div className="button">
                                <a 
                                    href="#contact" 
                                    className="contact__button"
                                >
                                    Me contacter 
                                    <Icon 
                                        inverted color="grey" 
                                        name="mail outline" 
                                        style={{marginLeft: '10px'}}
                                    />
                                </a>
                                <a 
                                    href="#portfolio" 
                                    className="portfolio__button"
                                >
                                    Mon Portfolio
                                </a>
                             </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

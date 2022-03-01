import React from 'react';
import { Icon } from 'semantic-ui-react'; 

import './navBar.css'; 

function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar__container">
                <a href="#home" className="navbar__logo">gc</a>
                <div className="navbar__gitlogo">
                    <a 
                        href="https://github.com/GuillaumeCARRA" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <Icon 
                            name="github" 
                            size="big" 
                            style={{color: '#15023a'}}
                        />
                    </a>
                </div>
                <div className="navbar__linkedinlogo">
                    <a 
                        href="https://www.linkedin.com/in/guillaume-carra-5280bb1ba/" 
                        target="_blank" 
                        rel="noreferrer"
                    > 
                        <Icon 
                            name="linkedin" 
                            size="big" 
                            style={{color: '#15023a'}}
                        />
                    </a>
                </div>
                <div className="navbar__menu">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <a 
                                href="#home" 
                                className="navbar__link"
                            >
                                Home
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a 
                                href="#about" 
                                className="navbar__link"
                            >
                                A propos
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a 
                                href="#resume" 
                                className="navbar__link"
                            >
                                Mon Parcours
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a 
                                href="#portfolio" 
                                className="navbar__link"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a 
                                href="#contact" 
                                className="navbar__link"
                            >
                                Contact
                            </a>
                        </li>
                        <div className="underline__animation"></div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar;

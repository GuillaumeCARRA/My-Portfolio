import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import imagePortfolio from '../../assets/images/portfolio.png';
import imageConverter from '../../assets/images/converter.png';
import imageNetflixClone from '../../assets/images/netflixclone.png';
import imageApiGithub from '../../assets/images/apigithub.png';
import imageEcommerce from '../../assets/images/ecommerce.png';

import './projects.css';


function Projects() {

    /* STATE FOR WIDTH WE NEED TO SCROLL */
    const [width, setWidth] = useState(0);

    /* USEREF TO GRAB THE WIDTH */
    const carrousel = useRef();

    /*USEEFFECT WITH AN EMPTY ARRAY */
    /*THE FUNCTION RUN WHEN THE COMPONENT GET MOUNTED*/
    useEffect(() => {
        // console.log('useeffect', carrousel.current.scrollWidth, carrousel.current.offsetWidth);
        //caroussel.current.scrollWidth --> the full size width for scroll
        //if we add this value to the constraint the content going to be off screen
        //caroussel.current.offsetWidth --> is the size that's currently showing up on the screen
        //full width - size that's currently showing up on the screen = value needs to be dragged
        setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
    }, [])

    return (
        <div className="portfolio">
           <h2 className="portfolio__title" id="portfolio">
                Portfolio
           </h2>
           <motion.div ref={carrousel} className="portfolio__carrousel" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x" 
                    //-width otherwise it goes the other way around
                    dragConstraints={{ right: 20, left: -width }} 
                    className="inner-carrousel"
                >
                    <motion.div className="portfolio__item"> 
                        <img 
                            src={imagePortfolio}
                            alt="portfolio"
                        />
                        <div className="portfolio__link">
                            <h2 className="portfolio__work">portfolio</h2>
                            <a href="https://github.com/GuillaumeCARRA/My-Portfolio" 
                                target="_blank" 
                                rel="noreferrer" 
                            >
                                Code
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="portfolio__item"> 
                        <img 
                            src={imageNetflixClone}
                            alt="netflix clone"
                        />
                        <div className="portfolio__link">
                            <h2 className="portfolio__work">netflix clone</h2>
                            <a 
                                href="https://github.com/GuillaumeCARRA/Netflix-clone"
                                target="_blank" 
                                rel="noreferrer" 
                            >
                                Code
                            </a>
                            <a 
                                href="https://netflix-clone-97fb7.web.app/"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                App
                            </a>
                        </div>
                    </motion.div>

                    <motion.div className="portfolio__item"> 
                        <img 
                            src={imageApiGithub}
                            alt="api github"
                        />
                        <div className="portfolio__link">
                            <h2 className="portfolio__work">api github</h2>
                            <a 
                                href="https://github.com/GuillaumeCARRA/api_github"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Code
                            </a>
                            <a 
                                href="https://apigithub-gc.netlify.app/"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                App
                            </a>
                        </div>
                    </motion.div>

                    <motion.div className="portfolio__item"> 
                        <img 
                            src={imageEcommerce}
                            alt="todo list"
                        />
                        <div className="portfolio__link">
                            <h2 className="portfolio__work">Web Store</h2>
                            <a 
                                href="https://github.com/GuillaumeCARRA/js-ecommerce"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Code
                            </a>
                            <a 
                                href="https://webstoresneakers.netlify.app/"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                App
                            </a>
                        </div>
                    </motion.div>

                    <motion.div className="portfolio__item"> 
                        <img 
                            src={imageConverter}
                            alt="football api"
                        />
                        <div className="portfolio__link">
                            <h2 className="portfolio__work">api football</h2>
                            <a 
                                href="https://github.com/GuillaumeCARRA/football_api"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                    Code
                            </a>
                            <a 
                                href="https://api-soccer.netlify.app/"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                App
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
           </motion.div>
        </div>
    )
}

export default Projects;

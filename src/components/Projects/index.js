import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import images from '../../imagesCaroussel';

import './projects.css'

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
                    dragConstraints={{ right: 0, left: -width }} 
                    className="inner-carrousel"
                >
                    {images.map((image) => (
                        <motion.div className="portfolio__item" key={image}> 
                            <img 
                                src={image} 
                                alt="caroussel"
                            />
                        </motion.div>
                    ))}
                </motion.div>
           </motion.div>
        </div>
    )
}

export default Projects;

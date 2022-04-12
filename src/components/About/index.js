import React from 'react';
import bart from '../../../src/assets/images/bart-temporary.jpg';
import './about.css';

function About() {
    return (
        <div className="about" >
            <h2 className="about__title" id="about">
                A propos de moi
            </h2>
            <div className="about__container">
                <div className="about__data">
                    <p className="about__description">
                        Après avoir effectué <span>divers emplois</span> et avoir été pendant 3 ans Vendeur Sports Collectifs, j'ai eu l'envie de me <span>reconvertir dans le Développement Web</span>. 
                        <br/> <br/>
                        Pour cela j'ai suivi une <span className="text__uppercase">formation développeur fullstack javascript</span>, délivrant le Titre Professionnel “Développeur Web et Web
                        Mobile”, en téléprésentiel, au sein de l'école O'clock.
                        <br/> <br/>
                        Grâce à mes expériences multiples, j'ai pu acquérir de nombreuses compétences, telle que <span>le travail en équipe, la rigueur, l'organisation et le sérieux</span>.
                        <br/><br/>
                        Actuellement je continue à me former en <span>autodidacte</span> autant sur la partie <span>Frontend</span> que sur la partie <span>Backend</span> pour pouvoir avoir encore plus de projets à fournir.
                    </p>
                </div>
                    <div className="img__item">
                        <img src={bart} className="img__about" alt="bart simpson picture"/>
                    </div>
            </div>
        </div>
    )
}

export default About;

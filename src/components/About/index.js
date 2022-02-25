import React from 'react';

import './about.css';

function About() {
    return (
        <div className="about" id="about">
            <h2 className="about__title">
                A propos de moi
            </h2>
            <div className="about__container">
                <div className="about__data">
                    <p className="about__description">
                        En premier lieu, je tiens à vous remercier pour la lecture de cette courte introduction sur moi-même. <br />
                        Je me présente, je m'appelle Guillaume (bonjour Guillaume !!!), après avoir travaillé pendant 3 ans en tant que <span>Vendeur Sports Collectifs </span>
                        et avoir effectué <span>divers emplois</span>, que vous pourrez retrouver dans mon <a href="#resume" className="text__link">CV</a>, j'ai eu donc l'envi  
                        de me reconvertir dans le développement Web. <br/>
                        Pour cela j'ai suivi une <span className="text__uppercase">formation développeur fullstack javascript</span>, délivrant le Titre Professionnel “Développeur Web et Web
                        Mobile”, en téléprésentiel, au sein de l'école O'clock et ce qui m'a permis aussi d'obtenir ma certification OPQUAST "Maitrise de la qualité en projet Web".<br/>
                        Grâce à mes expériences multiples, j'ai pu acquérir de nombreuses compétences, telle que <span>le travail en équipe, la rigueur, l'organisation et le sérieux.</span> <br/>
                        Actuellement je continue à me former en <span>autodidacte</span> autant sur la partie <span>Frontend</span> que sur la partie <span>Backend</span> pour pouvoir avoir encore plus de projets à fournir.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;

import React from 'react';
import { Icon } from 'semantic-ui-react';
import './resume.css';

function Resume({educations, experiences}) {
    return (
        <div className="resume" >
           <h2 className="resume__title" id="resume">
                Formations et Expériences
           </h2>
           <div className="resume__container" >
                <div className="resume__subtitle">
                    <h3 className="resume__presentation">
                        <Icon 
                            name="graduation cap"
                            style={{marginRight:"8px"}}
                        />
                        Formations
                    </h3>
                </div>

                <div className="resume__subtitle">
                    <h3 className="resume__presentation">
                        <Icon 
                            name="industry"
                            style={{marginRight:"8px"}}
                        />
                        Expériences
                    </h3>
                </div>
                <div className="resume__sections">
                    <div className="resume__items">
                        <ul style={{listStyle:"none"}}>
                            {educations.map((education) => (
                                <li key={education.id}>
                                    <div className="resume__education">
                                        <h4 className="resume__diploma">
                                            {education.title}
                                        </h4>
                                        <h5 className="resume__school">
                                            {education.name}
                                        </h5>
                                        <h6 className="resume__date">
                                            {education.date}
                                        </h6>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="resume__items">
                        <ul style={{listStyle:"none"}}>
                        {experiences.map((experience) => (
                             <li key={experience.id}>
                             <div className="resume__education">
                                     <h4 className="resume__diploma">
                                        {experience.job_title}
                                     </h4>
                                     <h5 className="resume__school">
                                        {experience.company}
                                     </h5>
                                     <h6 className="resume__date">
                                        {experience.date}
                                     </h6>
                                 </div>
                             </li>
                        ))}
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Resume;

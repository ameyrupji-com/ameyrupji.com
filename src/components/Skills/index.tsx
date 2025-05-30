import React, { useState } from 'react';

import './skills.scss';
import './skills.color.scss';
import './skills-icons.scss';
import './skills-icons.color.scss';

interface Skill {
    'skill-css': string;
    'skill-name': string;
}

interface SkillsProps {
    skills: {
        'title-light': string;
        'title-strong': string;
        'skills-using': Skill[];
        'skills-other': Skill[];
    };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const [showSkills, setShowSkills] = useState(false);
    
      const handleShowMoreClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShowSkills(true);
      };

    return (
        <div className="container-fluid" id="skills-main">
            <div className="container">
                <div className="row container-title" id="skills-title" data-aos="fade-down">
                    <div className="col-md-12 text-center">
                        <h1 className="title">{skills['title-light']} <span className="title-strong">{skills['title-strong']}</span></h1>
                    </div>
                </div>
                <div className="row" id="skills-array-using" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">
                    {skills['skills-using'].map((skill, index) => (
                        <div key={index} className="col-md-4 col-lg-3 col-xl-2 col-sm-4 col-4">
                            <div className="skills-block text-center">
                                <i className={skill['skill-css']}></i>
                                <p>{skill['skill-name']}</p>
                            </div>
                        </div>
                    ))}
                    {!showSkills && (
                        <div className="col-md-4 col-lg-3 col-xl-2 col-sm-4 col-4 unused btn" id="show-more">
                            <div className="skills-block text-center" onClick={handleShowMoreClick}>
                                <i className="fas fa-angle-down"></i>
                                <p><a href="#">Show Other</a></p>
                            </div>
                        </div>
                    )}
                </div>
                {showSkills && (
                    <div className="row" id="skills-array-other" data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom">
                        {skills['skills-other'].map((skill, index) => (
                            <div key={index} className="col-md-4 col-lg-3 col-xl-2 col-sm-4 col-4 unused">
                                <div className="skills-block text-center">
                                    <i className={skill['skill-css']}></i>
                                    <p>{skill['skill-name']}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="row" id="skills-key-div" className="float-right">
                    <ul>
                        <li>◉ Currently Using</li>
                        <li className="unused">◉ Past Experience</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
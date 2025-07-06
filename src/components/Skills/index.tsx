import React, { useState } from 'react';

import './skills.scss';
import './skills.color.scss';
import './skills-icons.scss';
import './skills-icons.color.scss';

interface Skill {
    'skill-css': string;
    'skill-name': string;
    'type'?: string;
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
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredSkills, setFilteredSkills] = useState(skills);
    
    const handleShowMoreClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShowSkills(true);
    };


    function filterSills(filter: string): void {
        setActiveFilter(filter);
        if (filter === "all") {
            setFilteredSkills(skills);
        } else {
            const filteredUsing = skills['skills-using'].filter(skill => skill['type'] === filter);
            const filteredOther = skills['skills-other'].filter(skill => skill['type'] === filter);
            setFilteredSkills({
                'title-light': skills['title-light'],
                'title-strong': skills['title-strong'],
                'skills-using': filteredUsing,
                'skills-other': filteredOther
            });
        }
    }

    return (
        <div className="container-fluid" data-section id="skills-main">
            <div className="container">
                <div className="row container-title" id="skills-title" data-aos="fade-down">
                    <div className="col-md-12 text-center">
                        <h1 className="title">{skills['title-light']} <span className="title-strong">{skills['title-strong']}</span></h1>
                    </div>
                </div>
                <div className="row container-btns" id="skill-filter-btns" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">
                    <div className="col-md-12 text-center">
                        <div className="btn-group center" role="group">
                            <button type="button" className={`${activeFilter == "all" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-all" onClick={() => filterSills("all")}>All</button>
                            <button type="button" className={`${activeFilter == "programming" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-programming" onClick={() => filterSills("programming")}>Programming</button>
                            <button type="button" className={`${activeFilter == "database" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-database" onClick={() => filterSills("database")}>Database</button>
                            <button type="button" className={`${activeFilter == "testing" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-testing" onClick={() => filterSills("testing")}>Testing</button>
                            <button type="button" className={`${activeFilter == "ci-cd" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-ci-cd" onClick={() => filterSills("ci-cd")}>CI&nbsp;CD</button>
                            <button type="button" className={`${activeFilter == "infrastructure" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-infrastructure" onClick={() => filterSills("infrastructure")}>Infra</button>
                            <button type="button" className={`${activeFilter == "monitoring" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-monitoring" onClick={() => filterSills("monitoring")}>Monitoring</button>
                            <button type="button" className={`${activeFilter == "tools" ? 'btn-primary' : 'btn-light'} btn`} id="timeline-btn-tools"onClick={() => filterSills("tools")}>Tools</button>
                        </div>
                    </div>
                </div>
                <div className="row" id="skills-array-using" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">
                    {filteredSkills['skills-using'].map((skill, index) => (
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
                        {filteredSkills['skills-other'].map((skill, index) => (
                            <div key={index} className="col-md-4 col-lg-3 col-xl-2 col-sm-4 col-4 unused">
                                <div className="skills-block text-center">
                                    <i className={skill['skill-css']}></i>
                                    <p>{skill['skill-name']}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="row float-right" id="skills-key-div">
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
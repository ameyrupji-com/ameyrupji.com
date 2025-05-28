import React, { useEffect, useState } from 'react';

import InfoBlock from './InfoBlock';
import WorkBlock from './WorkBlock';
import EducationBlock from './EducationBlock';
import StarTwinkle from '../StarTwinkle';

import './timeline.scss';
import './timeline.color.scss';
import './modal-full-page.scss'
import './modal-full-page.color.scss'



interface TimelineProps {
    timeline: {
        'title-light': string;
        'title-strong': string;
        blocks: Array<{
            type: string;
            'css-class': string[];
            'css-id': string;
            'image-src'?: string;
            'tooltip-title'?: string;
            'block-content'?: {
                heading: string;
                organization: {
                    'css-class': string;
                    name: string;
                };
                timeline: {
                    from: string;
                    to: string;
                    duration: string;
                };
                location: {
                    city: string;
                    state: string;
                    country?: string;
                };
                'short-description': string;
                'work-impact'?: string[];
                'technology-tools'?: Array<{
                    'skill-css': string;
                    'skill-name': string;
                }>;
                'course-impact'?: string[];
                courses?: Array<{
                    'course-name': string;
                    'course-number': string;
                }>;
                activities?: string[];
            };
        }>;
    };
}

const Timeline: React.FC<TimelineProps> = ({ timeline }) => {

    const [filteredBlocks, setFilteredBlocks] = useState(timeline.blocks);
    const [filters, setFilters] = useState(['image', 'alternate', 'work', 'education']);

    useEffect(() => {
        setFilteredBlocks(timeline.blocks.filter((block) => filters.includes(block.type)));
    }, [filters]);

    return (
      <StarTwinkle
        starWidth={100}
        starHeight={100}
        starMargins={40}
        starImageCount={6}
      >
         <div className="container-fluid" id="timeline-main">
            <div className="container" id="timeline-container">
                <div className="row container-title" id="timeline-title" data-aos="fade-down">
                    <div className="col-md-12 text-center">
                        <h1 className="title">{timeline['title-light']} <span className="title-strong">{timeline['title-strong']}</span></h1>
                    </div>
                </div>
                <div className="row container-btns" id="timeline-btns" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">
                    <div className="col-md-12 text-center">
                        <div className="btn-group center" role="group">
                            <button type="button" className="btn btn-primary" id="timeline-btn-all" onClick={() => setFilters(['image', 'alternate', 'work', 'education'])}>Complete</button>
                            <button type="button" className="btn btn-light" id="timeline-btn-work" onClick={() => setFilters(['image', 'work'])}>Work</button>
                            <button type="button" className="btn btn-light" id="timeline-btn-education"onClick={() => setFilters(['image', 'education'])}>Education</button>
                        </div>
                    </div>
                </div>
                <section id="timeline" className="container">
                    {filteredBlocks.map((block, index) => {
                        if (block.type === 'image') {
                            return (
                                <div key={index} className={`timeline-block ${block['css-class'].join(' ')}`} id={block['css-id']}>
                                    <div className="timeline-img-container top">
                                        <div id="me"></div>
                                    </div>
                                </div>
                            );
                        } else if (block.type === 'alternate') {
                            return (
                                <InfoBlock block={block} index={index} key={index}/>
                            )
                        } else if (block.type === 'work') {
                            return (
                                <WorkBlock block={block} index={index} key={index}/>
                            )
                        } else if (block.type === 'education') {
                            return(
                            <EducationBlock block={block} index={index} key={index} />
                            )
                        }
                        return null;
                    })}
                </section>
            </div>
        </div>
    </StarTwinkle>
    );
};

export default Timeline;
import React, {  useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DotGrid from './DotGrid';

import './can.scss';
import './can.color.scss';

interface CanProps {
    can: {
        'can-tems': Array<string>;
    };
    app: {
        api_base_url: string;
    };
}

gsap.registerPlugin(ScrollTrigger);

const Can: React.FC<CanProps> = ({ can, app }) => {
    
    const container = useRef();

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "p",
            start: "center center",
            endTrigger: "li:last-of-type",
            end: "center center",
            pin: true,
            markers: false,
            scrub: false
        });
    }, { scope: container });

    return (
        <div id="can-main">
            <div className="row container-title" id="can-title" data-aos="fade-down">
                <div className="col-md-12 text-center">
                    <h1 className="title">
                        My <span className="title-strong">Expertise</span>
                    </h1>
                    <p>Across the full lifecycle:</p>
                </div>
            </div>
            <div className="row" id="can-body">
                <div className="can" ref={container}>
                    <p className='can-hello'>I</p>
                    <ul className="rotator">
                        {can['can-tems'].map((term, index) => (
                            <li key={index} className="rotator-item">{term}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Can;

import React, { useRef, useState, useEffect } from 'react';

const EducationBlock: React.FC<{ block: any, index: any }> = ({ block, index }) => {
    const [hideModal, setHideModal] = useState(true);
    const [isBlockVisible, setIsBlockVisible] = useState(false);
    const timelineBlockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsBlockVisible(true);
            // Optionally disconnect the observer if you don't need it anymore
            observer.disconnect(); 
          }
        });
    
        if (timelineBlockRef.current) {
          observer.observe(timelineBlockRef.current);
        }
    
        return () => {
          if (observer) {
            observer.disconnect();
          }
        };
      }, []);

    return (
        <div key={index} className={`timeline-block education ${block['css-class'].join(' ')}`} id={block['css-id']} ref={timelineBlockRef}>
            <div className="timeline-img-container"></div>
            <div className={`timeline-content timeline-block-content ${isBlockVisible? 'bounce-in' : 'is-hidden'}`} data-toggle="modal" data-target={`#${block['css-id']}-modal`} onClick={() => setHideModal(false)}>
                <div className="heading">
                    <h2>{block['block-content'].heading}</h2>
                </div>
                <div className="heading-secondary">
                    <p>
                        <i className={block['block-content'].organization['css-class']}></i>
                        <span className="company">{block['block-content'].organization.name}</span>
                    </p>
                    <p>
                        <i className="far fa-calendar-alt"></i>
                        <span className="from">{block['block-content'].timeline.from}</span> - <span className="to">{block['block-content'].timeline.to}</span>
                        <span className="duration">{block['block-content'].timeline.duration}</span>
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="city-state">
                            {block['block-content'].location.city}, {block['block-content'].location.state}{block['block-content'].location.country && `, ${block['block-content'].location.country}`}
                        </span>
                    </p>
                </div>
                <div className="text">
                    <p>{block['block-content']['short-description']}</p>
                </div>
                <div className="read-more">
                    <p style={{ textAlign: 'right' }}><span className="read-more-click">Click</span><span className="read-more-tap">Tap</span> to Read More...</p>
                </div>
            </div>
            <div className="modal" id={`${block['css-id']}-modal`} tabIndex={-1} role="dialog" aria-labelledby={`${block['css-id']}-modal-label`} aria-hidden="true" style={{display: hideModal ? 'none' : 'block'}}>
                <div className="modal-dialog modal-full" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setHideModal(true)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-body-head">
                                <h1 className="modal-title text-center" id="sse-modal-label">{block['block-content'].heading}</h1>
                                <h2 className="text-center">
                                    <span className="company">{block['block-content'].organization.name}</span>
                                </h2>
                                <h4 className="text-center">
                                    <span className="from">{block['block-content'].timeline.from}</span> - <span className="to">{block['block-content'].timeline.to}</span>
                                    <span className="duration">{block['block-content'].timeline.duration}</span>
                                    <span className="separator">|</span>
                                    <span className="city-state">
                                        {block['block-content'].location.city}, {block['block-content'].location.state}{block['block-content'].location.country && `, ${block['block-content'].location.country}`}
                                    </span>
                                </h4>
                            </div>
                            <div className="modal-body-content">
                                <h3 className="title-light">Course <span className="title-strong">Impact</span></h3>
                                {block['block-content']['course-impact'].map((impact:any, idx:any) => (
                                    <p key={idx}>{impact}</p>
                                ))}
                                {block['block-content'].courses && (
                                    <>
                                        <h3 className="title-light"><span className="title-strong">Courses</span></h3>
                                        <div className="row">
                                            <ul>
                                                {block['block-content'].courses.map((course:any, idx:any) => (
                                                    <li key={idx}>
                                                        {course['course-name']}
                                                        <i>{course['course-number']}</i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                                {block['block-content'].activities && (
                                    <>
                                        <h3 className="title-light">Extracurricular <span className="title-strong">Activities</span></h3>
                                        <div className="row">
                                            <ul>
                                                {block['block-content'].activities.map((activity:any, idx:any) => (
                                                    <li key={idx}>{activity}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="modal-mobile-close">
                                <button type="button" className="btn btn-light float-right" data-dismiss="modal" aria-label="Close" onClick={() => setHideModal(true)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationBlock;
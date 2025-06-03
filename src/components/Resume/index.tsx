import React from 'react';

import './resume.scss';
import './resume.color.scss';

import resumePdf from './assets/pdf/ameyrupji_resume.pdf';
import resumePrasablePdf from './assets/pdf/ameyrupji_resume_parsable.pdf';

interface ResumeProps {
    resume: {
        'title-light': string;
        'title-strong': string;
        resumes: {
            'col-class': string;
            'btn-class': string;
            'btn-href': string;
            'btn-id': string;
            text: string;
            'file-icon-css': string;
        }[];
    };
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {

    return (
        <div className="container-fluid" id="resume-main">
            <div className="container">
                <div className="row" data-aos="fade-down">
                    <div className="col-md-12 text-center">
                        <h1 className="title">
                            {resume['title-light']} <span className="title-strong">{resume['title-strong']}</span>
                        </h1>
                    </div>
                </div>
                <div className="row" id="resume-download-row" data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom">
                    {resume.resumes.map((item, index) => (
                        <div key={index} className={`resume-cols col-xl-4 col-lg-4 col-md-4 col-12 text-center ${item['col-class']}`}>
                            <div className="download-btn">
                                { (() => {
                                    switch (item['btn-href'] ) {
                                        case 'pdf':
                                            return <a className={item['btn-class']} id={item['btn-id']} target = "_blank" download="ameyrupji_resume" href={resumePdf}>{item.text}</a>;
                                        case 'docx':
                                            return <a className={item['btn-class']} id={item['btn-id']} target = "_blank" download="ameyrupji_parsable_resume" href={resumePrasablePdf}>{item.text}</a>;
                                        default:
                                            return <a className={item['btn-class']} href={item['btn-href']} id={item['btn-id']} target = "_blank" rel="noreferrer" data-url="https://ameyrupji.com/assets/pdf/ameyrupji_resume.pdf" data-title="Check out Amey Rupji's resume at:" data-subject="Check out Amey Rupji's Resume">{item.text}</a>;
                                    }
                                })()}   
                            </div>
                            <div className="file-icon">
                                <i className={item['file-icon-css']}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
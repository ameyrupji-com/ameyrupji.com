import React, {useEffect} from 'react';
import './summary.scss';
import './summary.color.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface SummaryProps {
    summary: {
        'title-light': string;
        'title-strong': string;
        summaries: {
            'i-class': string;
            text: string;
        }[];
    };
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="container-fluid" id="summary-main">
            <div className="container">
                <div className="row container-title" id="summary-title" data-aos="fade-down">
                    <div className="col-md-12 text-center">
                        <h1 className="title">{summary['title-light']} <span className="title-strong">{summary['title-strong']}</span></h1>
                    </div>
                </div>

                <div className="card-deck mb-3 text-center">
                    {summary.summaries.map((item, index) => (
                        <div className="card mb-4 box-shadow" data-aos="zoom-out-up" data-aos-anchor-placement="top-center" key={index}>
                            {/* <div className="card-header">
                                <h4 className="my-0 font-weight-normal"></h4>
                            </div> */}
                            <div className="card-body">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Summary;
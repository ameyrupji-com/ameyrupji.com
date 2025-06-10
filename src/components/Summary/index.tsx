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
        <div className="container-fluid" data-section id="summary-main">
            <div className="container">
                <div className="row container-title" id="summary-title" data-aos="fade-down">
                    <div className="col-md-12 text-center">
                        <h1 className="title">{summary['title-light']} <span className="title-strong">{summary['title-strong']}</span></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">
                        <div className="card-deck-row text-center">
                            {summary.summaries.map((item, index) => (
                                <div className="card box-shadow"  key={index}>
                                    <div className="card-body">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">
                        <div id="working-photo"></div>
                    </div>
                </div>

                
                

            </div>
        </div>
    );
};

export default Summary;
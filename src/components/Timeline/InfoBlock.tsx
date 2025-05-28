import { useState } from 'react';

const InfoBlock: React.FC<{ block: any, index: any }> = ({ block, index }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div key={index} className={`timeline-block-alt ${block['css-class'].join(' ')}`} id={block['css-id']}>
            <div className="timeline-img-container-alt">
                <button type="button" className="btn link"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}>
                </button>
                {isHovering ?
                <div className="tooltip bs-tooltip-right show fade in">
                    <div className="arrow"></div>
                    <div className="tooltip-inner" dangerouslySetInnerHTML={{__html: block['tooltip-title']}}></div>
                </div>
                : null} 
            </div>
        </div>
    );
};

export default InfoBlock;



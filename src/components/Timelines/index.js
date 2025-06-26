import React from 'react';
import "./Timeline.css";
import timelineData from './timelineData';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <h3 className="timeline-title">{data.title}</h3>
            <p className="timeline-description">{data.description}</p>
            <span className="circle" />
        </div>
    </div>
);

const CustomTimeline = ({ data = timelineData}) => {
    return (
        <>
            {data.length > 0 && (
                <div className="timeline-container">
                    {data.map((item, idx) => (
                        <TimelineItem data={item} key={idx} />
                    ))}
                </div>
            )}
        </>
    );
};

export default CustomTimeline;
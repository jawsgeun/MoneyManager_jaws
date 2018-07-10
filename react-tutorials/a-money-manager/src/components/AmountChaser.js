import React from 'react';
import './common.css'
const AmountChaser = (props) => {
    const {chaser} = props;
    return (
        <div className = "chaser">
            <b>{chaser}</b>
        </div>
    );
};

export default AmountChaser;
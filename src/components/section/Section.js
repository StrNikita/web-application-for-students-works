import React from 'react';

import './Section.css';

export default function Section(props) {
    return (
            <div className='section-link'>
                <div>
                    <h1>{ props.title }</h1>
                    <p>{ props.text }</p>
                </div>
            </div>
    )
}
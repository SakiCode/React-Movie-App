import React from 'react';
import './HeroImage.css';

const HeroImage = (props) => {
    return (
        <div className='rmdb-heroimage'
            style={{
                background:
                `linear-gradient(to right, rgb(7, 8, 13) 25%, rgba(39, 77, 216, 0) 100%),
                url('${props.image}')`
            }}
        >
            <div className='rmdb-heroimage-content'>
                <div className='rmdb-heroimage-text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;
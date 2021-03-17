import React from 'react';
import preloader from '../../accets/img/preloader.gif'

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="preloader" style={{width: '100px', height: '100px'}}></img>
        </div>
)
}
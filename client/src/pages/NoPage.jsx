import React from 'react';
import './style.css';

function NoPage() {
    return (
        <div className="page-container">
            <div className="page-item">
                404 Error
            </div>
            <img src={require('../assets/closed.png')} />
        </div>
    );
}

export default NoPage;
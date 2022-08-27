import React from 'react'
import { Link } from 'react-router-dom'


const CtaSection = (props) => {
    return (
        <div
            className="wpo-cta-section"
        >
            <div className="conatiner-fluid">
                <div className="wpo-cta-item">
                    <h1>Did you know?</h1>
                    <h4>90% of diseases comes from the food that we eat. Degenerative diseases such as hypertension, stroke, and diabetes are caused by our poor diet.</h4>
                    <br>
                    </br>
                    <Link to="/home" className="theme-btn-s2">Scan now!</Link>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;
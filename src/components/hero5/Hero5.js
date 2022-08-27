import React from 'react'
import { Link } from 'react-router-dom'

const Hero5 = () => {
    return (
        <section className="wpo-hero-style-4">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <h2>Wediet</h2>
                    <p >We will help you become more aware about the food that you eat.</p>
                    <div className="wpo-wedding-date">
                        <div className="clock-grids">

                        </div>
                    </div>
                    <Link to="/home" className="theme-btn-s2">Scan now!</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero5;
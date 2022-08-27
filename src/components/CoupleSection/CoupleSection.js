import React from 'react';
import coupleImg1 from '../../images/couple/2.jpg'
import coupleImg2 from '../../images/couple/3.jpg'

import shape1 from '../../images/wediet/profile.jpeg'
import shape2 from '../../images/wediet/profile.jpeg'
import shape3 from '../../images/wediet/profile.jpeg'
import shape4 from '../../images/wediet/profile.jpeg'

const CoupleSection = (props) => {

    return (
        <section className={`couple-section section-padding ${props.cClass}`} id="couple">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-11">
                        <div className="couple-area clearfix">
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="couple-img">
                                            <img src={coupleImg1} alt="" />
                                            <div className="couple-shape">
                                                <img src={shape3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="couple-text">
                                            <h3>Anargya Widyadhana</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item groom">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 order-lg-1 order-2">
                                        <div className="couple-text">
                                            <h3>Andhika Yoga Perdana</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-2 order-1">
                                        <div className="couple-img">
                                            <img src={coupleImg2} alt="" />
                                            <div className="couple-shape">
                                                <img src={shape4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="couple-img">
                                            <img src={coupleImg1} alt="" />
                                            <div className="couple-shape">
                                                <img src={shape3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="couple-text">
                                            <h3>Bima Satria Ramadhan</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item groom">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 order-lg-1 order-2">
                                        <div className="couple-text">
                                            <h3>Dwi Prasetya Armunanta</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-2 order-1">
                                        <div className="couple-img">
                                            <img src={coupleImg2} alt="" />
                                            <div className="couple-shape">
                                                <img src={shape4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <img src={shape2} alt="" />
            </div>
        </section>

    );
}



export default CoupleSection;
import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import about from '../../images/blog/about-widget.jpg'
import profile from '../../api/profile'

const ProfilePage = () => {
    const ActivationStatus = [
        'Very rarely exercise',
        'Infrequent exercise (1-3 times per week)',
        'Get enough exercise (3 - 5 times per week)',
        'Frequent exercise (6 - 7 times per week)',
        'Very often exercise (about 2 times a day)'
    ]

    const renderContent = () => (
        <div
            className='row d-flex align-items-center justify-content-center'
            style={{ margin: "0px 12px" }}
        >
            <div className={`col col-lg-8 col-12`}>
                <div className="blog-sidebar">
                    <div className="widget about-widget">
                        <div className="img-holder">
                            <img src={about} alt="" />
                        </div>
                        <h4>{profile.user_name}</h4>
                        <h3>{profile.email}</h3>
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Age
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {profile.age}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Height
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {profile.height}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Weight
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {profile.weight}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Exercise Status
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {ActivationStatus[profile.exercise_status]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Profile'} />
            {renderContent()}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ProfilePage;


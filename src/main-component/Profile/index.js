import React, { Fragment } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import PageTitle from '../../components/pagetitle'
import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import about from '../../images/wediet/profile.jpeg'
import profile from '../../api/profile'

const ProfilePage = () => {
    const ActivationStatus = [
        'Very rarely exercise',
        'Infrequent exercise (1-3 times per week)',
        'Get enough exercise (3 - 5 times per week)',
        'Frequent exercise (6 - 7 times per week)',
        'Very often exercise (about 2 times a day)'
    ]

    const renderReport = (report) => {
        const { name, standard_amount, current_amount } = report;
        const isCompleted = current_amount > standard_amount
        const completed = isCompleted ? 100 : (current_amount / standard_amount) * 100
        console.log(completed, 'completed', name)
        const BarColor = {
            Calories: '#001219',
            Fats: '#005f73',
            Sodium: '#0a9396',
            Cholesterol: '#94d2bd',
            Sugar: '#e9d8a6',
            Carbohydrates: '#ee9b00',
            Protein: '#ca6702'
        }

        return (
            <div>
                <div>{name}</div>
                <ProgressBar
                    completed={completed}
                    bgColor={BarColor[name]}
                />
                <div className='row'>
                    <div className='col col-3' style={{ textAlign: "left" }}>
                        Current Amount
                    </div>
                    <div className='col col-9' style={{ textAlign: "left" }}>
                        : {current_amount}
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-3' style={{ textAlign: "left" }}>
                        Standart Amount
                    </div>
                    <div className='col col-9' style={{ textAlign: "left" }}>
                        : {standard_amount}
                    </div>
                </div>
            </div>
        )
    }

    const mapRecomendations = (recomendation) => {
        const { name, distance, amount } = recomendation;
        return (
            <div className='row'>
                <div className='col col-3' style={{ textAlign: "left" }}>
                    {name}
                </div>
                <div className='col col-9' style={{ textAlign: "left" }}>
                    : {distance} km (burn {amount} kal)
                </div>
            </div>
        )
    }

    const renderContent = () => (
        <div
            className='row d-flex align-items-center justify-content-center'
            style={{ margin: "50px 0px" }}
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
                                : {profile.age} years old
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Height
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {profile.height} cm
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Weight
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {profile.weight} kg
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Gender
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {profile.gender}
                            </div>
                        </div>
                    </div>

                    <div className="widget about-widget">
                        <h4>Report</h4>
                        <br />
                        <div className='row'>
                            <div className='col col-3' style={{ textAlign: "left" }}>
                                Exercise Status
                            </div>
                            <div className='col col-9' style={{ textAlign: "left" }}>
                                : {ActivationStatus[profile.exercise_status]}
                            </div>
                        </div>
                        <br />
                        {profile.reports.map(renderReport)}
                    </div>

                    <div className="widget about-widget">
                        <h4>Recommendations</h4>
                        <br />
                        {profile.recommendations.map(mapRecomendations)}
                        <br />
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


import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero5 from '../../components/hero5/Hero5';
import Scrollbar from '../../components/scrollbar'
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import shape1 from '../../images/couple/shape-1.png'
import shape2 from '../../images/couple/shape-2.png'

const HomePage = (props) => {
    const renderInformation = () => (
        <section className={`couple-section section-padding ${props.cClass}`} id="couple">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-11">
                        <div className="couple-area clearfix">
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="couple-text">
                                            <h3>Capture a wider customer base</h3>
                                            <p>
                                                People often eat out because of their busy work schedules and prefer to go to restaurants for events such as meetings. For some people, not knowing the value of food can limit their food choices when eating out. When calories and nutritional value are displayed on menus, health-conscious diners are no longer limited in choosing restaurants they can enjoy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item groom">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 order-lg-1 order-2">
                                        <div className="couple-text">
                                            <h3>Nutrition labels increase revenue</h3>
                                            <p>
                                                There is research on a program from the Canadian Heart and Stroke Foundation, namely "Health Check." This program makes menu items labeled "HC" when they meet the Heart and Stroke Foundation's nutritional criteria. The results showed people ordered fewer calories, saturated fat, and foods containing sugar and preferred to eat dishes that displayed the HC label. Research reports also reveal that the rate of ordering food marked with HC is increasing. Restaurant businesses can also be profitable if they provide a selection of serving sizes that can be adjusted depending on individual calorie needs, as well as nutritional preferences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-10">
                                        <div className="couple-text">
                                            <h3>The next generation of customers are already into healthy eating</h3>
                                            <p>
                                                Generally, health-conscious adults limit their children to eating at fast food restaurants. However, the exception to this is when nutrition labels are available for foods sold over the counter fast food. Parents are satisfied when they can choose better food for their children and become less constrained when choosing restaurants to eat out. It also encourages children to learn about nutritious eating and creates healthy eating habits. In addition, children often like to visit restaurants to explore various nutritious dishes, which is good for the restaurant business.
                                            </p>
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
    )

    return (
        <Fragment>
            <Navbar2 />
            <Hero5 />
            <CtaSection />
            {renderInformation()}
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;
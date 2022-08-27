import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import restaurantDetails from '../../api/restaurantDetails'
import Footer from '../../components/footer/Footer';
import EventSection from '../../components/EventSection/EventSection';
import SectionTitleS2 from '../../components/SectionTitleS2'
import hImg1 from '../../images/slider/s2.png'
import BlogSidebar from '../../components/BlogSidebar'

const Style = {
    testing: {
        textAlign: "left",
        marginTop: "20px",
    },
    composition: {
        margin: "0px",
        listStyleType: "circle"
    },
    boldFont: {
        fontWeight: "bold"
    }
}
const RestaurantDetails = (props) => {
    const { id } = useParams()
    const { menus } = restaurantDetails;

    const mapComposition = (composition) => {
        return (
            <li style={{ margin: "0px" }}>{composition}</li>
        );
    }

    const renderMenu = (event) => (
        <div className="col col-lg-6 col-md-6 col-12 " key="key">
            <div className="wpo-event-item">
                <div className="wpo-event-text">
                    <h2>{event.title}</h2>
                    <img src={hImg1} alt="" />
                    <div style={Style.testing}>
                        <div style={Style.boldFont}>
                            Price: {event.price}
                        </div>
                        <div style={Style.boldFont}>
                            Description:
                        </div>
                        <div style={Style.boldFont}>
                            {event.description}
                        </div>
                        <div style={Style.boldFont}>
                            Compositions:
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <ul style={Style.composition}>
                                {event.compositions.map(mapComposition)}
                            </ul>
                        </div>
                        <div style={Style.boldFont}>
                            Nutrients:
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <ul style={Style.composition}>
                                <li style={{ margin: "0px" }}>Calori: {event.nutrients.calories}</li>
                                <li style={{ margin: "0px" }}>Sugar: {event.nutrients.sugar}</li>
                                <li style={{ margin: "0px" }}>Cholesterol: {event.nutrients.cholesterol}</li>
                                <li style={{ margin: "0px" }}>Carbohydrates: {event.nutrients.carbohydrates}</li>
                                <li style={{ margin: "0px" }}>Natrium: {event.nutrients.natrium}</li>
                                <li style={{ margin: "0px" }}>Sodium: {event.nutrients.sodium}</li>
                                <li style={{ margin: "0px" }}>Protein: {event.nutrients.protein}</li>
                                <li style={{ margin: "0px" }}>Fats: {event.nutrients.fats}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderMenuList = () => {
        return (
            <section className={`wpo-event-section section-padding`} id="event">
                <div className="container">
                    <SectionTitleS2 MainTitle={'Menu'} />
                    <div className="row">
                        <div className={`col col-lg-8 col-12`}>
                            <div className="wpo-event-wrap">
                                <div className="row h-100">
                                    {menus.map(renderMenu)}
                                </div>
                            </div>
                        </div>
                        <BlogSidebar blLeft={props.blLeft} />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <Fragment>
            <Navbar2 />
            <EventSection
                restaurantDetails={restaurantDetails}
            />
            {renderMenuList()}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default RestaurantDetails;

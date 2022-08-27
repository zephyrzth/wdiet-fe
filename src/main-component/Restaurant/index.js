import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import SectionTitle from '../../components/SectionTitle'
import restaurants from '../../api/restaurants'
import restoBg from '../../images/wediet/restaurant.jpg'

const Restaurant = () => {
    React.useEffect(() => {
        async function fetchData() {
            const res = await axios('http://localhost:5001/api/themes/stocks/BBCA?total=4');
            console.log(res, 'res');
        }
        fetchData();
    }, [])

    const renderRestaurantList = () => {
        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <section className={'wpo-blog-section section-padding'}>
                <div className="container">
                    <SectionTitle topTitle={'News'} MainTitle={'Restaurants'} />
                    <div className="wpo-blog-items">
                        <div className="row">
                            {restaurants.map((blog, Bitem) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                    <div className="wpo-blog-item">
                                        <div className="wpo-blog-img">
                                            <img src={restoBg} alt="" />
                                            <div className="thumb">{blog.thumb} </div>
                                        </div>
                                        <div className="wpo-blog-content">
                                            <h2><Link onClick={ClickHandler} to={`/restaurant/${blog.id}`}>{blog.restaurant_name}</Link></h2>
                                            <ul>
                                                <li><Link onClick={ClickHandler} to={`/restaurant/${blog.id}`}>{blog.phone}</Link></li>
                                                <li>{blog.address}</li>
                                            </ul>
                                            <p>{blog.open_time}.00 WIB - {blog.close_time}.00 WIB</p>
                                            <p>{blog.description}</p>
                                            <Link className="read-more" onClick={ClickHandler} to={`/restaurant/${blog.id}`}>Read More..</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >
        )
    }

    return (
        <Fragment>
            <Navbar2 />
            {renderRestaurantList()}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Restaurant;
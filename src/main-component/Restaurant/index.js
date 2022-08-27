import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import SectionTitle from '../../components/SectionTitle'
import restaurants from '../../api/restaurants'

const Restaurant = () => {
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
                                            <img src={blog.screens} alt="" />
                                            <div className="thumb">{blog.thumb} </div>
                                        </div>
                                        <div className="wpo-blog-content">
                                            <h2><Link onClick={ClickHandler} to={`/restaurants/${blog.id}`}>{blog.restaurant_name}</Link></h2>
                                            <ul>
                                                <li><Link onClick={ClickHandler} to={`/restaurants/${blog.id}`}>{blog.author}</Link></li>
                                                <li>{blog.phone}</li>
                                            </ul>
                                            <p>{blog.description}</p>
                                            <Link className="read-more" onClick={ClickHandler} to={`/restaurants/${blog.id}`}>Read More..</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
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
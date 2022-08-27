import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero5 from '../../components/hero5/Hero5';
import Scrollbar from '../../components/scrollbar'
import CtaSection from '../../components/CtaSection/CtaSection';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';

const HomePage = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero5 />
            <CtaSection />
            <EventSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;
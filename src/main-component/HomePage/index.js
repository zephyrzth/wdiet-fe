import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Scrollbar from '../../components/scrollbar'
import RSVP from '../../components/RSVP';
import CtaSection from '../../components/CtaSection/CtaSection';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';

const HomePage = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Hero />
            <CtaSection />
            <RSVP />
            <EventSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;
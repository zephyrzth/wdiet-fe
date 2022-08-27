import React, { Fragment } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import Scrollbar from '../../components/scrollbar'

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <CoupleSection cClass={'couple-section-s2'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;

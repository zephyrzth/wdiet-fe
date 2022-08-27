import React, { Fragment } from 'react';
import QRCode from "react-qr-code";

import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    const renderQrCode = () => (
        <div style={{
            background: 'white',
            padding: '40px',
            display: 'flex',
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
        }}>
            <h1>Restaurant Ikan Bakar Keputih</h1>
            <QRCode value="http://192.168.1.14:3037/restaurant/6309cf4b76fa949ae0b554ab" />
        </div>

    )

    return (
        <Fragment>
            <Navbar2 />
            {renderQrCode()}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;
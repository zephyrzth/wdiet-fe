import React from 'react'

import LocationMap from '../Modal'
import SectionTitleS2 from '../SectionTitleS2'
import mosque from '../../images/icon/mosque.png'
import wifi from '../../images/icon/wifi.png'
import outdoor from '../../images/icon/outdoor.png'

const EventSection = (props) => {
    const {
        restaurantDetails: {
            restaurant_name,
            is_wifi,
            is_mushola,
            is_indoor,
            open_time,
            close_time,
            phone,
            address,
            description
        }
    } = props;

    const renderMosqueIcon = () => (
        <img
            src={mosque}
            class="border-4 float-start img-fluid" alt=""
            style={{ width: "27px" }}
        />
    )

    const renderOutdoorIcon = () => (
        <img
            src={wifi}
            class="border-4 float-start img-fluid" alt=""
            style={{ width: "27px" }}
        />
    )

    const renderWifiIcon = () => (
        <img
            src={outdoor}
            class="border-4 float-start img-fluid" alt=""
            style={{ width: "27px" }}
        />
    )

    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitleS2 MainTitle={'Restaurant'} />
                <div className="wpo-event-wrap">
                    <div className="row h-100 d-flex align-items-center justify-content-center">
                        <div className="col col-lg-6 col-md-6 col-12 " key="key">
                            <div className="wpo-event-item">
                                <div className="wpo-event-text">
                                    <h2>{restaurant_name}</h2>
                                    <ul>
                                        <li>{open_time}.00 WIB - {close_time}.00 WIB</li>
                                        <li>{address} || {phone}</li>
                                        <li>{description}</li>
                                        <li>
                                            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                                                {is_mushola && renderMosqueIcon()}
                                                {is_indoor && renderOutdoorIcon()}
                                                {is_wifi && renderWifiIcon()}
                                            </div>
                                        </li>
                                        <li><LocationMap /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;
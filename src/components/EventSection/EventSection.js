import React from 'react'
import LocationMap from '../Modal'
import SectionTitleS2 from '../SectionTitleS2'


const Events = [
    {
        title: 'The Reception',
        li1: 'Monday, 25 Sep, 2022 1:00 PM – 4:30 PM',
        li2: 'Estern Star Plaza, Road 123, USA',
        li3: '+1 234-567-8910'
    }
]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitleS2 MainTitle={'Restaurant'} />
                <div className="wpo-event-wrap">
                    <div className="row h-100 d-flex align-items-center justify-content-center">
                        <div className="col col-lg-6 col-md-6 col-12 " key="key">
                            <div className="wpo-event-item">
                                <div className="wpo-event-text">
                                    <h2>Ikan Bakar Keputih</h2>
                                    <ul>
                                        <li>{Events[0].li1}</li>
                                        <li>{Events[0].li2}</li>
                                        <li>{Events[0].li3}</li>
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
import React, { Fragment } from 'react';
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom'
import axios from 'axios';

import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import EventSection from '../../components/EventSection/EventSection';
import SectionTitleS2 from '../../components/SectionTitleS2'
import hImg1 from '../../images/wediet/menu.jpeg'
import addIcon from '../../images/icon/add.png'
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
    const [restaurantDetails, setRestaurantDetails] = React.useState({});
    const [menus, setMenus] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const res = await axios(`http://localhost:8080/restaurants/${id}`);
            setRestaurantDetails(res.data)
            setMenus(res.data.menus)
        }
        fetchData();
    }, [])

    const onClickMenu = async (title, menuId) => {
        const userId = sessionStorage.getItem("id");
        const payload = {
            id: userId,
            menu_id: menuId,
            quantity: 1
        }
        const res = await axios.post('http://localhost:8080/usermenu', payload);
        toast.warning(`${res.data.message}`);
        toast.success(`Success add ${title} to your daily menu!`);
    };

    const mapNutrients = (nutrient) => {
        const { name, amount } = nutrient
        const UNIT = {
            Calories: 'kcal',
            Protein: 'gram',
            Fats: 'gram',
            Colesterol: 'kcal',
            Sugar: 'gram',
            Sodium: 'miligram'
        }

        return (
            <div>
                {name} : {amount} {UNIT[name]}
            </div>
        )
    }

    const mapComposition = (composition) => {
        const { name, nutrients } = composition;

        return (
            <li style={{ margin: "0px" }}>
                <div>{name}</div>
                <div>
                    {nutrients.map(mapNutrients)}
                </div>
            </li>
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
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={addIcon} alt='' width={60} onClick={() => onClickMenu(event.title, event.id)} style={{ cursor: "pointer" }} />
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

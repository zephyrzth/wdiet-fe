const restaurantDetails = {
    restaurant_name: "abc",
    is_wifi: true,
    is_mushola: true,
    is_indoor: true,
    open_time: 18,
    close_time: 23,
    phone: "+628328372832",
    address: "Jl Pahlawan",
    description: "testing",
    menus: [{
        title: "Soto Daging",
        price: 30000,
        description: "Nasi soto dengan daging sapi",
        compositions: [{
            name: "Gurame fish",
            nutrients: [{
                name: "Calories",
                amount: 70
            }, {
                name: "Protein",
                amount: 100
            }, {
                name: "Fats",
                amount: 10
            }]
        }]
    }]
};

export default restaurantDetails;
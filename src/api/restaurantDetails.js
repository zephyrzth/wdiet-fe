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
        compositions: [
            "nasi", "daging sapi", "penyedap", "bumbu soto", "usus sapi", "paru sapi"
        ],
        nutrients: {
            calories: "500 kkal",
            sugar: "80 g",
            cholesterol: "200 g",
            carbohydrates: "150 g",
            natrium: "50 g",
            sodium: "20 g",
            protein: "10 g",
            fats: "10 g"
        }
    }]
};

export default restaurantDetails;
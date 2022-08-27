const profile = {
    user_name: "Dhana",
    email: "dhana@gmail.com",
    age: 22,
    gender: "Male",
    height: 180,
    weight: 80,
    exercise_status: 3,
    reports: [{
        name: "Calories",
        standard_amount: 4000,
        current_amount: 4500
    }, {
        name: "Fats",
        standard_amount: 4000,
        current_amount: 2500
    }, {
        name: "Sodium",
        standard_amount: 4000,
        current_amount: 1500
    }, {
        name: "Cholesterol",
        standard_amount: 4000,
        current_amount: 4001
    }, {
        name: "Sugar",
        standard_amount: 4000,
        current_amount: 500
    }, {
        name: "Carbohydrates",
        standard_amount: 4000,
        current_amount: 4500
    }, {
        name: "Protein",
        standard_amount: 4000,
        current_amount: 4500
    }],
    recommendations: [{
        name: "Bicycling",
        amount: 20,
        distance: 2.5
    }, {
        name: "Running",
        amount: 10,
        distance: 2.5
    }, {
        name: "Walking",
        amount: 20,
        distance: 2.5
    }]
}

export default profile;
// store all cars globally for filteering
let allCars = []

// define an asynchronous function to fetch car data from json file/
const fetchCarData = async () => {
    try {
        // fetch the json file containing car data
    const response = await fetch('cars.json')



    const data = await response.json()


    // store the Array of cars in the global variable 'allCars' for future filtering
    allCars = data.cars
    
    // initially display all cars when the page load
    displayCarCards(allCars)
    // handle anyerrors that occur during the fetch process
    }catch(error){
        // log the error message to thth console
        console.error('Error fetch car data:', error)
    }
    

}

// define a function to display the car cards on the webpage.
const displayCarCards = (cars) => {
    const carContainer = document.getElementById('carContainer')


    carContainer.innerHTML = '';

    cars.forEach((car) => {

        // create a new <div> element for each car card
        const carCard = document.createElement('div')

        // add a css class 'card to the <div>' for styling purpose
        carCard.classList.add('card')

        // add HTML content to the car card, including an image, name, and model of the car.

        carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name} ${car.model}" width="300">
        <h2>${car.name}</h2>
        <p>Model: ${car.model}</p>
        `

        // Append the car card to the car container on the webpage 
        carContainer.appendChild(carCard)

    })
}

// fetch and display car data when the page loads
window.onload = fetchCarData
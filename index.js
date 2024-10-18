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
    generateFilterButtons(allCars)

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

// DEFINE A FUNCTION TO GENERATE BUTTONS
const generateFilterButtons = (cars) => {
    // get the HTML element where the filter buttons will be place
    const filterButtonContainer = document.getElementById('filterButtons')
    

    // use map() to create an array of all car names
    const uniqueNames = [...new Set(cars.map(car => car.name))]

    //loop through the array of unique car names
    uniqueNames.forEach(name => {
        // create a new <button> 
        const button = document.createElement('button')

        // set the text of the button of the car
        button.textContent = name
        // add an event listener to the button to filter the cars when clicked
        button.addEventListener('click', () => {filterCarsByName(name)})

        filterButtonContainer.appendChild(button)
    })
}

function filterCarsByName(name){
    const filteredCar = allCars.filter(car => car.name === name)

    displayCarCards(filteredCar)
}

// fetch and display car data when the page loads
window.onload = fetchCarData
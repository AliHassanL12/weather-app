import getWeatherData from "./getWeatherData";
import {render} from "./render";

const getInputValue = async function getInputValue(event) {
    event.preventDefault();
    const input = document.querySelector('#searchLocation');
    input.setCustomValidity('');
    const value = input.value;
    try {
        const data = await getWeatherData(value);
        render(data);
    } catch(error) {
        if (input.validity.valueMissing) {
            input.setCustomValidity('Please enter a location.');
            input.reportValidity();
            return;
        }
        input.setCustomValidity('This location cannot be found. Please enter a new location.');
        input.reportValidity();
    }
};

const toggleTemperature = function toggleTemperature(event) {
    const switchNode = event.target;
    const temperatureNode = document.querySelector('.temperature');
    const feelsLikeNode = document.querySelector('.feelsLike');
    const matchNumber = temperatureNode.textContent.match(/\d+\.?\d*/g);
    const feelsLikeNumber = feelsLikeNode.textContent.match(/\d+\.?\d*/g);
    if (temperatureNode.textContent.includes('°F')) {
        const convertedTemp = (matchNumber[0] - 32) * (5/9);
        const convertedFeelsLike = (feelsLikeNumber[0] - 32) * (5/9);
        switchNode.textContent = 'Switch to °F';
        temperatureNode.textContent = `${convertedTemp.toFixed(1)}°C`;
        feelsLikeNode.textContent = `Feels Like: ${convertedFeelsLike.toFixed(1)}°C`;
    } else {
        const convertedTemp = (matchNumber[0] * (9/5)) + 32;
        const convertedFeelsLike = (feelsLikeNumber[0] * (9/5)) + 32;
        switchNode.textContent = 'Switch to °C';
        temperatureNode.textContent = `${convertedTemp.toFixed(1)}°F`;
        feelsLikeNode.textContent = `Feels Like: ${convertedFeelsLike.toFixed(1)}°F`;
    }
}

const attachListeners = function attachListeners() {
    const searchButton = document.querySelector('.searchButton');
    searchButton.addEventListener('click', getInputValue);

    const switchButton = document.querySelector('.switch');
    switchButton.addEventListener('click', toggleTemperature);
};


export { attachListeners };
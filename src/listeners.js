import getWeatherData from "./getWeatherData";

const getInputValue = function getInputValue(event) {
    event.preventDefault();
    const input = document.querySelector('#searchLocation');
    const value = input.value;
    getWeatherData(value);
};

const attachListeners = function attachListeners() {
    const searchButton = document.querySelector('.searchButton');
    searchButton.addEventListener('click', getInputValue);
};

export default attachListeners;
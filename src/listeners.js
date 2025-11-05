import getWeatherData from "./getWeatherData";
import render from "./render";

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

const attachListeners = function attachListeners() {
    const searchButton = document.querySelector('.searchButton');
    searchButton.addEventListener('click', getInputValue);
};

export default attachListeners;
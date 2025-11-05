import getWeatherData from "./getWeatherData";
import render from "./render";

const getInputValue = async function getInputValue(event) {
    event.preventDefault();
    const input = document.querySelector('#searchLocation');
    const value = input.value;
    const data = await getWeatherData(value);
    render(data);
};

const attachListeners = function attachListeners() {
    const searchButton = document.querySelector('.searchButton');
    searchButton.addEventListener('click', getInputValue);
};

export default attachListeners;
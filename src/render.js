const render = function renderWeatherData(data) {
    const dataCopy = {...data}; 
    const { address, temp, humidity, conditions, feelslike } = dataCopy;
    const capitalisedAddress = address.charAt(0).toUpperCase() + address.slice(1);
    const locationNode = document.querySelector('.location');
    const tempNode = document.querySelector('.temperature');
    const feelsLikeNode = document.querySelector('.feelsLike');
    const conditionsNode = document.querySelector('.conditions');
    const humidityNode = document.querySelector('.humidity');
    locationNode.textContent = capitalisedAddress;
    const switchNode = document.querySelector('.switch');
    switchNode.textContent = 'Convert to °C';
    tempNode.textContent = `${temp}°F`;
    feelsLikeNode.textContent = `Feels Like: ${feelslike}°F`;
    conditionsNode.textContent = `${conditions}`;
    humidityNode.textContent = `Humidity: ${humidity}%`;
};

export default render;
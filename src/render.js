const locationNode = document.querySelector('.location');
const tempNode = document.querySelector('.temperature');
const feelsLikeNode = document.querySelector('.feelsLike');
const conditionsNode = document.querySelector('.conditions');
const humidityNode = document.querySelector('.humidity');
const switchNode = document.querySelector('.switch');
const loading = document.querySelector('.loading');
const iconNode = document.querySelector('.icon');

const render = async function renderWeatherData(data) {
    const dataCopy = {...data}; 
    const { address, temp, humidity, conditions, feelslike, icon } = dataCopy;
    const importedIcon = await import(`./images/${icon}.png`);
    iconNode.src = importedIcon.default;
    const capitalisedAddress = address.charAt(0).toUpperCase() + address.slice(1);

    switchNode.textContent = 'Convert to °C';
    switchNode.className = 'switch active';
    locationNode.textContent = capitalisedAddress;
    tempNode.textContent = `${temp}°F`;
    feelsLikeNode.textContent = `Feels Like: ${feelslike}°F`;
    conditionsNode.textContent = `${conditions}`;
    humidityNode.textContent = `Humidity: ${humidity}%`;
};


const renderLoading = function renderLoading() {
    loading.textContent = 'Loading...';
    locationNode.textContent = '';
    tempNode.textContent = '';
    feelsLikeNode.textContent = '';
    conditionsNode.textContent = '';
    humidityNode.textContent = '';
    switchNode.className = 'switch inactive';
}

const removeLoadingRender = function removeLoadingRender() {
    loading.textContent = "";
}



export { render, renderLoading, removeLoadingRender };
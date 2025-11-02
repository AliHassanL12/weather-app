const getWeatherData = async function getWeatherDataFromLocation(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/2021-09-21?key=DKDBFJVMP2NVPUTXGTMTNJH9X`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};

export { getWeatherData };
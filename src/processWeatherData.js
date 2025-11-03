const processWeatherData = function processWeatherData(data) {
    const cloneData = { ...data };
    const { temp, humidity, conditions, feelslike } = cloneData.days[0];
    const extractedData = {
        temp,
        humidity,
        conditions,
        feelslike
    }
    console.log(extractedData);
};

export default processWeatherData;
const processWeatherData = function processWeatherData(data) {
    const cloneData = { ...data };
    const { address } = cloneData;
    const { temp, humidity, conditions, feelslike } = cloneData.days[0];
    const extractedData = {
        address,
        temp,
        humidity,
        conditions,
        feelslike
    }
    console.log(extractedData);
    return extractedData;
};

export default processWeatherData;
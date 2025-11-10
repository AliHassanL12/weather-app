const processWeatherData = async function processWeatherData(data) {
    const cloneData = { ...data };
    const { address } = cloneData;
    const { temp, humidity, conditions, feelslike, icon } = cloneData.days[0];
    const extractedData = {
        address,
        temp,
        humidity,
        conditions,
        feelslike,
        icon
    }
    console.log(extractedData);
    return extractedData;
};

export default processWeatherData;
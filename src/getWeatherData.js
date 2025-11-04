import processWeatherData from "./processWeatherData";
import { format } from "date-fns";

const getWeatherData = async function getWeatherDataFromLocation(location) {
    const currentDay = format(new Date(), 'yyyy-MM-dd');
    const currentTime = format(new Date(), 'HH:mm:ss');
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${currentDay}T${currentTime}?key=DKDBFJVMP2NVPUTXGTMTNJH9X`;
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error(`Response Status: ${response.status}`);
        };

        const data = await response.json();
        console.log(data);
        processWeatherData(data);
    } catch (error) {
        console.log(error);
    }
};

export default getWeatherData;
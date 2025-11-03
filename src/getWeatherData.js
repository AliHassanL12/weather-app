import processWeatherData from "./processWeatherData";
import { format, subHours } from "date-fns";

const getWeatherData = async function getWeatherDataFromLocation(location) {
    const currentDay = format(new Date(), 'yyyy-MM-dd');
    const currentTime = format(new Date(), 'HH:mm:ss');
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${currentDay}T${currentTime}?key=DKDBFJVMP2NVPUTXGTMTNJH9X`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    processWeatherData(data);
};

export default getWeatherData;
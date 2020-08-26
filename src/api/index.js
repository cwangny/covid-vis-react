import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
    try {
        // destructure to singleout the data object. 
        const {data} = await axios.get(url);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;
    } catch (error) {

    }
}

// function to fetch graph data

export const fetchDailyData = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedResponse = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedResponse;
    } catch (error) {

    }
}
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

// function to fectch graph data

export const fetchDailyData = async() => {
    try {
        const response = await axios.get(`${url}/daily`);

        console.log(response);
    } catch (error) {

    }
}
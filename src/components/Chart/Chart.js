import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ()=> {
    const [dailyData, setDailyData] = useState({});

    // In a class based component the following code is used to manipulate the state. In a functional component, setState hook does the exact same thing. 
    //
    // state = {
    //     dailyData: {}
    // }
    //
    // this.setState({dailyData:fetcheddata})

    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, [dailyData])

    const lineChart = (
        dailyData.length ? (
            <Line data={{
                labels: dailyData.map(({date}) => date),

                datasets:[{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'infected'
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'deaths'
                }]
            }} />
        ) : null
    )
           
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart; 
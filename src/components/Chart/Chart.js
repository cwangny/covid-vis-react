import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import {Line} from 'react-chartjs-2';

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

                datasets:[
                {
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: 'rebeccapurple',
                    fill: true
                }, 
                {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    fill: true
                },
                {
                    data: dailyData.map(({deltaConfirmed}) => deltaConfirmed),
                    label: 'Delta Confirmed',
                    borderColor: 'gold',
                    fill: true
                }
                ]
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
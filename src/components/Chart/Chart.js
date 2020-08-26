import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';

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

    })

    return (
        <div>
            Chart
        </div>
    )
}

export default Chart; 
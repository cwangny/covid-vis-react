import React from 'react';
// importing components
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
// importing css styles, .module.css files enable the css styles to have a local scope. 
import styles from './App.module.css';

import { fetchData } from './api/index';

// Only class based componenet that we need. Class based component cannot use hooks. 
class App extends React.Component {
  // write additional js code here.
  
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    // fills the state with values 
    this.setState({data:fetchedData});
  }

  render() {
    return (
      // JSX 
      <div className={styles.container}>
        <Cards data={this.state.data}/>
        <CountryPicker />
        <Chart />
        
      </div>
    )
  }
}

export default App;

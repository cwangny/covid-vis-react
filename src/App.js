import React from 'react';
// importing components
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
// importing css styles, .module.css files enable the css styles to have a local scope. 
import styles from './App.module.css';

// Only class based componenet that we need. Class based component cannot use hooks. 
class App extends React.Component {
  render() {
    return (
      // JSX 
      <div className={styles.container}>
        <Cards/>
        <CountryPicker />
        <Chart />
        
      </div>
    )
  }
}

export default App;

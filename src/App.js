import React, {Component} from 'react';
import logo from './logo.svg';
import WeatherLocation from './components/WeatherLocation'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WeatherLocation></WeatherLocation>
        </header>
      </div>
    );
  }
}

export default App;

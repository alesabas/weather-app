import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Aguascalientes',
            data: null
        };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log('handleUpdateClick resultado');
            console.log(data);
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });
        });
    }

    render(){
        console.log('render');
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                {data ?
                    <WeatherData data={data}/> :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
};

export default WeatherLocation;
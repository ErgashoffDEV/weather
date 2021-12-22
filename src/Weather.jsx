import React, {useState} from 'react';
import {fetchWeather} from "./api/fetchWeather";

const Weather = () => {
    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({})

    const search = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery("")
            console.log(data)
        }
    }

    return (
        <div className="container">
            <div className="search">
                <input type="text" className="search-input" placeholder="Search..." value={query} onKeyPress={search}
                       onChange={e => setQuery(e.target.value)}/>
            </div>
            {weather.main && (
                <div className="weather-data">
                    <div className="city">
                        <div className="info">
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                        </div>
                        <div className="details">
                            <h2 className="city-name"><span>{weather.name}</span><sup>{weather.sys.country}</sup></h2>
                        </div>
                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>

                    <div className="city">
                        <div className="details">
                            <h2 className="city-name"><span>{weather.name}</span><sup>{weather.sys.country}</sup></h2>
                        </div>
                        <div className="little-details">
                            <div className="little-detail">
                                <h4 className="little-detail-text">Humidity</h4>
                                <h5 className="little-detail-title">{weather.main.humidity} %</h5>
                            </div>
                            <div className="little-detail">
                                <h4 className="little-detail-text">Wind Speed</h4>
                                <h5 className="little-detail-title">{weather.wind.speed} m/s</h5>
                            </div>
                            <div className="little-detail">
                                <h4 className="little-detail-text">Max Temp</h4>
                                <h5 className="little-detail-title">{Math.round(weather.main.temp_max)}<sup>&deg;C</sup></h5>
                            </div>
                            <div className="little-detail">
                                <h4 className="little-detail-text">Min Temp</h4>
                                <h5 className="little-detail-title">{Math.round(weather.main.temp_min)}<sup>&deg;C</sup></h5>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default Weather;
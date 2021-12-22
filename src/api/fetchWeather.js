import React from 'react';
import axios from 'axios'

export const fetchWeather = async (query) => {
    const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: query,
            units: "metric",
            APPID: "a547768bf2d3a70f9c55aaa251a71d94",
        }
    })
    return data
}
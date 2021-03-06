import React from "react";

import AutocompleteSearch from "./autocompleteSearch";

const fillDigit = (num) => {
  const strNum = num + "";
  const strLength = strNum.length;

  if (strLength === 1) {
    return "0" + strNum;
  } else return strNum;
};

const DaysInWeek = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};


const WeatherDetails = ({ pageData = {} }) => {
  const { cityData, weatherData } = pageData || {};

  const { DailyForecasts = [] } = pageData.weatherData.weatherForcastData || {};

  const { Value = 0 } =
    weatherData?.weatherCurrentData[0]?.ApparentTemperature?.Metric || {};
  const currentWeatherValue = `${Math.round(Value)}`;
  const weatherIcon = weatherData?.weatherCurrentData[0]?.WeatherIcon;
  const cityWeathertext = weatherData?.weatherCurrentData[0]?.WeatherText;

  const getIcon = (icon) =>
    `https://developer.accuweather.com/sites/default/files/${fillDigit(
      weatherIcon
    )}-s.png`;

  

  return (
    <div>
      <div style={{ margin: "30px"}}>
      <AutocompleteSearch />
      </div>
      
      <div className="detalis" style={{border: "1px solid black", padding: "30px"}}>
      <div style={{display: 'flex'}}>
        <img src={getIcon()} alt="icon" />
        <h3>{cityData?.LocalizedName}</h3>
      </div>
      <strong style={{marginLeft:'100px'}}>{currentWeatherValue}&#176; C</strong>
      <div style={{textAlign: 'center',justifyContent: 'center'}}>
      <h1 className="display-1">{cityWeathertext}</h1>
      </div>
      
      <br/>

      <div className="card-deck" style={{display: 'flex', 
                      justifyContent: 'space-around', marginTop: '100px', padding: "20px"}}>
        {
          DailyForecasts.map((day, idx) => {
            const { Minimum, Maximum } = day.Temperature;
            const avgTemp = Math.round((Minimum.Value + Maximum.Value) / 2);
            const dayNum = new Date(day.Date).getDay();

            return (
              <div className="card" key={idx}>
              <div className="card-text"  style={{height: "100%", width:"100%", alignContent: "center", margin: "30px"}}>
                <div className="day">{DaysInWeek[dayNum]}</div>
                <div className="temp">{avgTemp}&#176; {Minimum.Unit || Maximum.Unit}</div>
              </div>
              </div>
            );
          })
        }
      </div>
      </div>  

    </div>
    
  );
};

export default WeatherDetails;

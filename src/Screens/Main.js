import React, { useEffect, useState } from "react";
import WeatherDetails from "../Components/WeatherDetails";
import { API_KEY, BASE_URL } from "../api/ApiConfig";

//import { cityDataMock, weatherForcastDataMock, weatherCurrentDataMock } from '../mockData/dataservic1';


const Main = () => {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    (async () => {
      const cityResult = await fetch(
        `${BASE_URL}locations/v1/cities/search?apikey=${API_KEY}&q=Tel Aviv`
      );
      const cityData = await cityResult.json();

      //const cityData = cityDataMock;

      if (!cityData?.length) {
        return;
      }
      
      const weatherForcastResult = await fetch(
        `${BASE_URL}forecasts/v1/daily/5day/${cityData[0].Key}?apikey=${API_KEY}&details=true&metric=true`
        );
      const weatherForcastData = await weatherForcastResult.json()

      //const weatherForcastData = weatherForcastDataMock;
        
      
      const weatherCurrentResult = await fetch(
        `${BASE_URL}currentconditions/v1/${cityData[0].Key}?apikey=${API_KEY}&details=true`
        );
      const weatherCurrentData = await weatherCurrentResult.json();
      //const weatherCurrentData = weatherCurrentDataMock;


      setPageData({
        cityData: cityData[0],
        weatherData: {
          weatherCurrentData,
          weatherForcastData,
        },
      });

    //   setPageData();

    })();
  }, []);

  if (!pageData || !Object.keys(pageData).length) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="container">
  
      <WeatherDetails pageData={pageData} />
    </div>
  );
};

export default Main;

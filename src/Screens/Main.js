import React, { useEffect, useState } from "react";
import WeatherDetails from "../Components/WeatherDetails";
import { API_KEY, BASE_URL } from "../api/ApiConfig";
//import CitySearch from "../Components/CitySearch";


const Main = () => {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    (async () => {
      const cityResult = await fetch(
        `${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=Tel Aviv`
      );
      const cityData = await cityResult.json();

      if (!cityData?.length) {
        return;
      }

      const weatherForcastResult = await fetch(
        `${BASE_URL}forecasts/v1/daily/5day/${cityData[0].Key}?apikey=${API_KEY}&details=true&metric=true`
      );
      const weatherForcastData = await weatherForcastResult.json()
      

      const weatherCurrentResult = await fetch(
        `${BASE_URL}currentconditions/v1/${cityData[0].Key}?apikey=${API_KEY}&details=true`
      );
      const weatherCurrentData = await weatherCurrentResult.json();

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
      {/* <CitySearch /> */}
      <br/>
      <br/>
      <WeatherDetails pageData={pageData} />
    </div>
  );
};

export default Main;

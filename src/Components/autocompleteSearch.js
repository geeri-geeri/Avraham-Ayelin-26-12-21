import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../api/ApiConfig";
import { autocompleteOneLetterMock, weatherCurrentDataMock } from '../mockData/dataservic1';

import debounce from 'lodash.debounce';



const AutocompleteSearch = () => {
  const [searchData, setSearchData] = useState([]);
//  const [currentWeather, setCurrentWeather] = useState();

  const onInputChange = async (e) => {
    const value = e?.target?.value || '';

    if (!value) {
      setSearchData([]);
      return;
    }

    const debouncedAutoCompleteAPI = debounce(async (value = '') => {
      const res = await fetch(`${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`);
      const data = await res.json();
      //const data = autocompleteOneLetterMock;

      if (!data?.length) {
        return;
      }

      setSearchData(data);
    }, 250);

    debouncedAutoCompleteAPI(value)
  };


  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input list="cities" type="text" placeholder="search a city"
         onChange={onInputChange}
         style={{width: "70%", height: "40px", borderRadius: "6px"}} />
        <datalist id="cities">
          {
            searchData?.map((city = {}, idx) => {
              const { LocalizedName: cityName, Country } = city;

              const displayName = `${cityName}, ${Country.LocalizedName}`;
              // console.log(city.Key);
              return (
                <option key={idx} value={displayName} />
              );
            })
          }
        </datalist>
      </form>
    </div>
  );
};

export default AutocompleteSearch;

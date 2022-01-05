import React, { useState } from "react";
import axios from "axios";

const CitySearch = (props) => {

  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const { localS, setLocals } = useState("");

  const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=TyKB4eSym5HXpp8zFnqAAlfwN5gy9Tqv&q=${search}`;

  async function searchCity() {

    const response = await axios.get(url).then();
    setResult([response.data])
    console.log(response.data)
    setSearch('')
  }

  const SubmitForm = (e) => {
    e.preventDefault()
    searchCity()

    //saving response data into local storage
    localStorage.setItem("setLocals", setLocals);
    localStorage.setItem("localS", setLocals ? localS : "")
  };

  return (
    <div>
      <form onSubmit={SubmitForm}>
        <div className="input-group mt-3 w-75 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search city..."
            aria-label="Search City"
            aria-describedby="basic-addon2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit" className="input-group-text" id="basic-addon2">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      {result.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <p>{item.LocalizedName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CitySearch;

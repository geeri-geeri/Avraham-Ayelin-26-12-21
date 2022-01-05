import React from "react";
import CitySearch from "./CitySearch";

const WeatherDetails = () => {
    

  return (
    <div>
      <div><CitySearch /></div>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card text-white text-center border-0">
              <img
                src={require("../nice.jpg")}
                className="card-img"
                style={{ height: "70vh" }}
                alt="..."
              />
              {/* <CitySearch {{}}/> */}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WeatherDetails;

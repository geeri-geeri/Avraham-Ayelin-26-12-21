import React, { useState } from "react";
//import { API_KEY, BASE_URL } from "../api/ApiConfig";
import { TextField, Autocomplete } from "@mui/material";




const CitySearch = () => {
  const [cities, setCities] = useState([]);

  // /locations/v1/cities/autocomplete?apikey=TyKB4eSym5HXpp8zFnqAAlfwN5gy9Tqv&q=%20
  //setCities(mockAutocompleteSearch);

  return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search City Here..." variant="outlined" />}
        // getOptionLabel={(option) => `${option.LocalizedName} ${option.Country.LocalizedName} ${option.Key}`}
      />
  );
};

export default CitySearch;

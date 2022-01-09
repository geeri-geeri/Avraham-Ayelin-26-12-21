import React, { useState } from "react";
//import { API_KEY, BASE_URL } from "../api/ApiConfig";
import { TextField, Autocomplete } from "@mui/material";

const mockAutocompleteSearch = [{
  
    "Version": 1,
    "Key": "249758",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Amsterdam",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509299",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Amsterdam Centrum",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509283",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Amsterdam Nieuw-West",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509344",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Amsterdam Noord",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509294",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Amsterdam Oost",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509347",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Amsterdam West",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509274",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Amsterdam Zuid",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "249493",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Amsterdam Zuidoost",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509289",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Amsterdam Oud-Oost",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  },
  {
    "Version": 1,
    "Key": "3509308",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Amsterdam Oud-West",
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland"
    }
  }
]


const CitySearch = () => {
  const [cities, setCities] = useState([]);

  // /locations/v1/cities/autocomplete?apikey=TyKB4eSym5HXpp8zFnqAAlfwN5gy9Tqv&q=%20
  setCities(mockAutocompleteSearch);

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

import React, { useEffect, useState } from "react";
import WeatherDetails from "../Components/WeatherDetails";
import { API_KEY, BASE_URL } from "../api/ApiConfig";
import CitySearch from "../Components/CitySearch";


// const mockPageData = {
//   "cityData": {
//       "Version": 1,
//       "Key": "215854",
//       "Type": "City",
//       "Rank": 31,
//       "LocalizedName": "Tel Aviv",
//       "Country": {
//           "ID": "IL",
//           "LocalizedName": "Israel"
//       },
//       "AdministrativeArea": {
//           "ID": "TA",
//           "LocalizedName": "Tel Aviv"
//       }
//   },
//   "weatherData": {
//       "weatherCurrentData": [
//           {
//               "LocalObservationDateTime": "2022-01-08T20:58:00+02:00",
//               "EpochTime": 1641668280,
//               "WeatherText": "Some clouds",
//               "WeatherIcon": 36,
//               "HasPrecipitation": false,
//               "PrecipitationType": null,
//               "IsDayTime": false,
//               "Temperature": {
//                   "Metric": {
//                       "Value": 16.6,
//                       "Unit": "C",
//                       "UnitType": 17
//                   },
//                   "Imperial": {
//                       "Value": 62,
//                       "Unit": "F",
//                       "UnitType": 18
//                   }
//               },
//               "RealFeelTemperature": {
//                   "Metric": {
//                       "Value": 16.7,
//                       "Unit": "C",
//                       "UnitType": 17,
//                       "Phrase": "Pleasant"
//                   },
//                   "Imperial": {
//                       "Value": 62,
//                       "Unit": "F",
//                       "UnitType": 18,
//                       "Phrase": "Cool"
//                   }
//               },
//               "RealFeelTemperatureShade": {
//                   "Metric": {
//                       "Value": 16.7,
//                       "Unit": "C",
//                       "UnitType": 17,
//                       "Phrase": "Pleasant"
//                   },
//                   "Imperial": {
//                       "Value": 62,
//                       "Unit": "F",
//                       "UnitType": 18,
//                       "Phrase": "Cool"
//                   }
//               },
//               "RelativeHumidity": 85,
//               "IndoorRelativeHumidity": 69,
//               "DewPoint": {
//                   "Metric": {
//                       "Value": 14.1,
//                       "Unit": "C",
//                       "UnitType": 17
//                   },
//                   "Imperial": {
//                       "Value": 57,
//                       "Unit": "F",
//                       "UnitType": 18
//                   }
//               },
//               "Wind": {
//                   "Direction": {
//                       "Degrees": 113,
//                       "Localized": "ESE",
//                       "English": "ESE"
//                   },
//                   "Speed": {
//                       "Metric": {
//                           "Value": 5.8,
//                           "Unit": "km/h",
//                           "UnitType": 7
//                       },
//                       "Imperial": {
//                           "Value": 3.6,
//                           "Unit": "mi/h",
//                           "UnitType": 9
//                       }
//                   }
//               },
//               "WindGust": {
//                   "Speed": {
//                       "Metric": {
//                           "Value": 16.2,
//                           "Unit": "km/h",
//                           "UnitType": 7
//                       },
//                       "Imperial": {
//                           "Value": 10.1,
//                           "Unit": "mi/h",
//                           "UnitType": 9
//                       }
//                   }
//               },
//               "UVIndex": 0,
//               "UVIndexText": "Low",
//               "Visibility": {
//                   "Metric": {
//                       "Value": 16.1,
//                       "Unit": "km",
//                       "UnitType": 6
//                   },
//                   "Imperial": {
//                       "Value": 10,
//                       "Unit": "mi",
//                       "UnitType": 2
//                   }
//               },
//               "ObstructionsToVisibility": "",
//               "CloudCover": 63,
//               "Ceiling": {
//                   "Metric": {
//                       "Value": 12192,
//                       "Unit": "m",
//                       "UnitType": 5
//                   },
//                   "Imperial": {
//                       "Value": 40000,
//                       "Unit": "ft",
//                       "UnitType": 0
//                   }
//               },
//               "Pressure": {
//                   "Metric": {
//                       "Value": 1013.2,
//                       "Unit": "mb",
//                       "UnitType": 14
//                   },
//                   "Imperial": {
//                       "Value": 29.92,
//                       "Unit": "inHg",
//                       "UnitType": 12
//                   }
//               },
//               "PressureTendency": {
//                   "LocalizedText": "Steady",
//                   "Code": "S"
//               },
//               "Past24HourTemperatureDeparture": {
//                   "Metric": {
//                       "Value": 2.1,
//                       "Unit": "C",
//                       "UnitType": 17
//                   },
//                   "Imperial": {
//                       "Value": 4,
//                       "Unit": "F",
//                       "UnitType": 18
//                   }
//               },
//               "ApparentTemperature": {
//                   "Metric": {
//                       "Value": 18.9,
//                       "Unit": "C",
//                       "UnitType": 17
//                   },
//                   "Imperial": {
//                       "Value": 66,
//                       "Unit": "F",
//                       "UnitType": 18
//                   }
//               },
//               "WindChillTemperature": {
//                   "Metric": {
//                       "Value": 16.7,
//                       "Unit": "C",
//                       "UnitType": 17
//                   },
//                   "Imperial": {
//                       "Value": 62,
//                       "Unit": "F",
//                       "UnitType": 18
//                   }
//               },
//               "WetBulbTemperature": {
//                   "Metric": {
//                       "Value": 15.1,
//                       "Unit": "C",
//                       "UnitType": 17
//                   },
//                   "Imperial": {
//                       "Value": 59,
//                       "Unit": "F",
//                       "UnitType": 18
//                   }
//               },
//               "Precip1hr": {
//                   "Metric": {
//                       "Value": 0,
//                       "Unit": "mm",
//                       "UnitType": 3
//                   },
//                   "Imperial": {
//                       "Value": 0,
//                       "Unit": "in",
//                       "UnitType": 1
//                   }
//               },
//               "PrecipitationSummary": {
//                   "Precipitation": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   },
//                   "PastHour": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   },
//                   "Past3Hours": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   },
//                   "Past6Hours": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   },
//                   "Past9Hours": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   },
//                   "Past12Hours": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   },
//                   "Past18Hours": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   },
//                   "Past24Hours": {
//                       "Metric": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Imperial": {
//                           "Value": 0,
//                           "Unit": "in",
//                           "UnitType": 1
//                       }
//                   }
//               },
//               "TemperatureSummary": {
//                   "Past6HourRange": {
//                       "Minimum": {
//                           "Metric": {
//                               "Value": 16.6,
//                               "Unit": "C",
//                               "UnitType": 17
//                           },
//                           "Imperial": {
//                               "Value": 62,
//                               "Unit": "F",
//                               "UnitType": 18
//                           }
//                       },
//                       "Maximum": {
//                           "Metric": {
//                               "Value": 20.7,
//                               "Unit": "C",
//                               "UnitType": 17
//                           },
//                           "Imperial": {
//                               "Value": 69,
//                               "Unit": "F",
//                               "UnitType": 18
//                           }
//                       }
//                   },
//                   "Past12HourRange": {
//                       "Minimum": {
//                           "Metric": {
//                               "Value": 12.6,
//                               "Unit": "C",
//                               "UnitType": 17
//                           },
//                           "Imperial": {
//                               "Value": 55,
//                               "Unit": "F",
//                               "UnitType": 18
//                           }
//                       },
//                       "Maximum": {
//                           "Metric": {
//                               "Value": 20.7,
//                               "Unit": "C",
//                               "UnitType": 17
//                           },
//                           "Imperial": {
//                               "Value": 69,
//                               "Unit": "F",
//                               "UnitType": 18
//                           }
//                       }
//                   },
//                   "Past24HourRange": {
//                       "Minimum": {
//                           "Metric": {
//                               "Value": 7.8,
//                               "Unit": "C",
//                               "UnitType": 17
//                           },
//                           "Imperial": {
//                               "Value": 46,
//                               "Unit": "F",
//                               "UnitType": 18
//                           }
//                       },
//                       "Maximum": {
//                           "Metric": {
//                               "Value": 21,
//                               "Unit": "C",
//                               "UnitType": 17
//                           },
//                           "Imperial": {
//                               "Value": 70,
//                               "Unit": "F",
//                               "UnitType": 18
//                           }
//                       }
//                   }
//               },
//               "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
//               "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
//           }
//       ],
//       "weatherForcastData": {
//           "Headline": {
//               "EffectiveDate": "2022-01-10T07:00:00+02:00",
//               "EffectiveEpochDate": 1641790800,
//               "Severity": 7,
//               "Text": "Seasonal temperatures for the next 5 days",
//               "Category": "",
//               "EndDate": null,
//               "EndEpochDate": null,
//               "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
//               "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
//           },
//           "DailyForecasts": [
//               {
//                   "Date": "2022-01-08T07:00:00+02:00",
//                   "EpochDate": 1641618000,
//                   "Sun": {
//                       "Rise": "2022-01-08T06:43:00+02:00",
//                       "EpochRise": 1641616980,
//                       "Set": "2022-01-08T16:53:00+02:00",
//                       "EpochSet": 1641653580
//                   },
//                   "Moon": {
//                       "Rise": "2022-01-08T10:52:00+02:00",
//                       "EpochRise": 1641631920,
//                       "Set": "2022-01-08T23:03:00+02:00",
//                       "EpochSet": 1641675780,
//                       "Phase": "WaxingCrescent",
//                       "Age": 6
//                   },
//                   "Temperature": {
//                       "Minimum": {
//                           "Value": 12.9,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Maximum": {
//                           "Value": 20.7,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "RealFeelTemperature": {
//                       "Minimum": {
//                           "Value": 13.6,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Cool"
//                       },
//                       "Maximum": {
//                           "Value": 21.8,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "RealFeelTemperatureShade": {
//                       "Minimum": {
//                           "Value": 13.6,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Cool"
//                       },
//                       "Maximum": {
//                           "Value": 19.8,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "HoursOfSun": 9.6,
//                   "DegreeDaySummary": {
//                       "Heating": {
//                           "Value": 1,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Cooling": {
//                           "Value": 0,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "AirAndPollen": [
//                       {
//                           "Name": "AirQuality",
//                           "Value": 0,
//                           "Category": "Good",
//                           "CategoryValue": 1,
//                           "Type": "Ozone"
//                       },
//                       {
//                           "Name": "Grass",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Mold",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Ragweed",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Tree",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "UVIndex",
//                           "Value": 3,
//                           "Category": "Moderate",
//                           "CategoryValue": 2
//                       }
//                   ],
//                   "Day": {
//                       "Icon": 1,
//                       "IconPhrase": "Sunny",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Brilliant sunshine",
//                       "LongPhrase": "Brilliant sunshine",
//                       "PrecipitationProbability": 0,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 0,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 7.4,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 248,
//                               "Localized": "WSW",
//                               "English": "WSW"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 20.4,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 276,
//                               "Localized": "W",
//                               "English": "W"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 6,
//                       "Evapotranspiration": {
//                           "Value": 0.1,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 5824.6,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Night": {
//                       "Icon": 35,
//                       "IconPhrase": "Partly cloudy",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Partly cloudy",
//                       "LongPhrase": "Partly cloudy",
//                       "PrecipitationProbability": 1,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 1,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 5.6,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 104,
//                               "Localized": "ESE",
//                               "English": "ESE"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 16.7,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 141,
//                               "Localized": "SE",
//                               "English": "SE"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 44,
//                       "Evapotranspiration": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 0,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Sources": [
//                       "AccuWeather"
//                   ],
//                   "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
//                   "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
//               },
//               {
//                   "Date": "2022-01-09T07:00:00+02:00",
//                   "EpochDate": 1641704400,
//                   "Sun": {
//                       "Rise": "2022-01-09T06:43:00+02:00",
//                       "EpochRise": 1641703380,
//                       "Set": "2022-01-09T16:54:00+02:00",
//                       "EpochSet": 1641740040
//                   },
//                   "Moon": {
//                       "Rise": "2022-01-09T11:20:00+02:00",
//                       "EpochRise": 1641720000,
//                       "Set": "2022-01-10T00:00:00+02:00",
//                       "EpochSet": 1641765600,
//                       "Phase": "First",
//                       "Age": 7
//                   },
//                   "Temperature": {
//                       "Minimum": {
//                           "Value": 10.9,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Maximum": {
//                           "Value": 18.8,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "RealFeelTemperature": {
//                       "Minimum": {
//                           "Value": 8.5,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Chilly"
//                       },
//                       "Maximum": {
//                           "Value": 19,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "RealFeelTemperatureShade": {
//                       "Minimum": {
//                           "Value": 8.5,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Chilly"
//                       },
//                       "Maximum": {
//                           "Value": 16.8,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "HoursOfSun": 8.4,
//                   "DegreeDaySummary": {
//                       "Heating": {
//                           "Value": 3,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Cooling": {
//                           "Value": 0,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "AirAndPollen": [
//                       {
//                           "Name": "AirQuality",
//                           "Value": 0,
//                           "Category": "Good",
//                           "CategoryValue": 1,
//                           "Type": "Ozone"
//                       },
//                       {
//                           "Name": "Grass",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Mold",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Ragweed",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Tree",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "UVIndex",
//                           "Value": 3,
//                           "Category": "Moderate",
//                           "CategoryValue": 2
//                       }
//                   ],
//                   "Day": {
//                       "Icon": 2,
//                       "IconPhrase": "Mostly sunny",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Mostly sunny",
//                       "LongPhrase": "Mostly sunny",
//                       "PrecipitationProbability": 2,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 2,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 16.7,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 213,
//                               "Localized": "SSW",
//                               "English": "SSW"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 44.4,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 225,
//                               "Localized": "SW",
//                               "English": "SW"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 17,
//                       "Evapotranspiration": {
//                           "Value": 0.1,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 5436.1,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Night": {
//                       "Icon": 33,
//                       "IconPhrase": "Clear",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Clear",
//                       "LongPhrase": "Clear",
//                       "PrecipitationProbability": 1,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 1,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 16.7,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 194,
//                               "Localized": "SSW",
//                               "English": "SSW"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 33.3,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 196,
//                               "Localized": "SSW",
//                               "English": "SSW"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 5,
//                       "Evapotranspiration": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 0,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Sources": [
//                       "AccuWeather"
//                   ],
//                   "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
//                   "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
//               },
//               {
//                   "Date": "2022-01-10T07:00:00+02:00",
//                   "EpochDate": 1641790800,
//                   "Sun": {
//                       "Rise": "2022-01-10T06:43:00+02:00",
//                       "EpochRise": 1641789780,
//                       "Set": "2022-01-10T16:54:00+02:00",
//                       "EpochSet": 1641826440
//                   },
//                   "Moon": {
//                       "Rise": "2022-01-10T11:48:00+02:00",
//                       "EpochRise": 1641808080,
//                       "Set": "2022-01-11T00:56:00+02:00",
//                       "EpochSet": 1641855360,
//                       "Phase": "WaxingGibbous",
//                       "Age": 8
//                   },
//                   "Temperature": {
//                       "Minimum": {
//                           "Value": 10.2,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Maximum": {
//                           "Value": 17.1,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "RealFeelTemperature": {
//                       "Minimum": {
//                           "Value": 9.5,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Chilly"
//                       },
//                       "Maximum": {
//                           "Value": 16.6,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "RealFeelTemperatureShade": {
//                       "Minimum": {
//                           "Value": 9.5,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Chilly"
//                       },
//                       "Maximum": {
//                           "Value": 15.4,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Cool"
//                       }
//                   },
//                   "HoursOfSun": 9.8,
//                   "DegreeDaySummary": {
//                       "Heating": {
//                           "Value": 4,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Cooling": {
//                           "Value": 0,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "AirAndPollen": [
//                       {
//                           "Name": "AirQuality",
//                           "Value": 0,
//                           "Category": "Good",
//                           "CategoryValue": 1,
//                           "Type": "Ozone"
//                       },
//                       {
//                           "Name": "Grass",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Mold",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Ragweed",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Tree",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "UVIndex",
//                           "Value": 3,
//                           "Category": "Moderate",
//                           "CategoryValue": 2
//                       }
//                   ],
//                   "Day": {
//                       "Icon": 2,
//                       "IconPhrase": "Mostly sunny",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Mostly sunny",
//                       "LongPhrase": "Mostly sunny",
//                       "PrecipitationProbability": 2,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 2,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 16.7,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 202,
//                               "Localized": "SSW",
//                               "English": "SSW"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 42.6,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 216,
//                               "Localized": "SW",
//                               "English": "SW"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 12,
//                       "Evapotranspiration": {
//                           "Value": 0.1,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 6776.1,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Night": {
//                       "Icon": 34,
//                       "IconPhrase": "Mostly clear",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Patchy clouds",
//                       "LongPhrase": "Patchy clouds",
//                       "PrecipitationProbability": 2,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 2,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 11.1,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 172,
//                               "Localized": "S",
//                               "English": "S"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 24.1,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 159,
//                               "Localized": "SSE",
//                               "English": "SSE"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 20,
//                       "Evapotranspiration": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 0,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Sources": [
//                       "AccuWeather"
//                   ],
//                   "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
//                   "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
//               },
//               {
//                   "Date": "2022-01-11T07:00:00+02:00",
//                   "EpochDate": 1641877200,
//                   "Sun": {
//                       "Rise": "2022-01-11T06:43:00+02:00",
//                       "EpochRise": 1641876180,
//                       "Set": "2022-01-11T16:55:00+02:00",
//                       "EpochSet": 1641912900
//                   },
//                   "Moon": {
//                       "Rise": "2022-01-11T12:16:00+02:00",
//                       "EpochRise": 1641896160,
//                       "Set": "2022-01-12T01:53:00+02:00",
//                       "EpochSet": 1641945180,
//                       "Phase": "WaxingGibbous",
//                       "Age": 9
//                   },
//                   "Temperature": {
//                       "Minimum": {
//                           "Value": 11.1,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Maximum": {
//                           "Value": 18.5,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "RealFeelTemperature": {
//                       "Minimum": {
//                           "Value": 11.1,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Cool"
//                       },
//                       "Maximum": {
//                           "Value": 19.1,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "RealFeelTemperatureShade": {
//                       "Minimum": {
//                           "Value": 11.1,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Cool"
//                       },
//                       "Maximum": {
//                           "Value": 18.1,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "HoursOfSun": 10.2,
//                   "DegreeDaySummary": {
//                       "Heating": {
//                           "Value": 3,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Cooling": {
//                           "Value": 0,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "AirAndPollen": [
//                       {
//                           "Name": "AirQuality",
//                           "Value": 0,
//                           "Category": "Good",
//                           "CategoryValue": 1,
//                           "Type": "Ozone"
//                       },
//                       {
//                           "Name": "Grass",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Mold",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Ragweed",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Tree",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "UVIndex",
//                           "Value": 3,
//                           "Category": "Moderate",
//                           "CategoryValue": 2
//                       }
//                   ],
//                   "Day": {
//                       "Icon": 1,
//                       "IconPhrase": "Sunny",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Plenty of sunshine",
//                       "LongPhrase": "Plenty of sunshine",
//                       "PrecipitationProbability": 1,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 1,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 11.1,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 222,
//                               "Localized": "SW",
//                               "English": "SW"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 25.9,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 212,
//                               "Localized": "SSW",
//                               "English": "SSW"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 0,
//                       "Evapotranspiration": {
//                           "Value": 0.1,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 7663.1,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Night": {
//                       "Icon": 33,
//                       "IconPhrase": "Clear",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Clear",
//                       "LongPhrase": "Clear",
//                       "PrecipitationProbability": 0,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 0,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 9.3,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 126,
//                               "Localized": "SE",
//                               "English": "SE"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 22.2,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 101,
//                               "Localized": "E",
//                               "English": "E"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 0,
//                       "Evapotranspiration": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 0,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Sources": [
//                       "AccuWeather"
//                   ],
//                   "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
//                   "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
//               },
//               {
//                   "Date": "2022-01-12T07:00:00+02:00",
//                   "EpochDate": 1641963600,
//                   "Sun": {
//                       "Rise": "2022-01-12T06:42:00+02:00",
//                       "EpochRise": 1641962520,
//                       "Set": "2022-01-12T16:56:00+02:00",
//                       "EpochSet": 1641999360
//                   },
//                   "Moon": {
//                       "Rise": "2022-01-12T12:47:00+02:00",
//                       "EpochRise": 1641984420,
//                       "Set": "2022-01-13T02:49:00+02:00",
//                       "EpochSet": 1642034940,
//                       "Phase": "WaxingGibbous",
//                       "Age": 10
//                   },
//                   "Temperature": {
//                       "Minimum": {
//                           "Value": 12.3,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Maximum": {
//                           "Value": 19.2,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "RealFeelTemperature": {
//                       "Minimum": {
//                           "Value": 11.6,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Cool"
//                       },
//                       "Maximum": {
//                           "Value": 19.6,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "RealFeelTemperatureShade": {
//                       "Minimum": {
//                           "Value": 11.6,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Cool"
//                       },
//                       "Maximum": {
//                           "Value": 17.5,
//                           "Unit": "C",
//                           "UnitType": 17,
//                           "Phrase": "Pleasant"
//                       }
//                   },
//                   "HoursOfSun": 7.2,
//                   "DegreeDaySummary": {
//                       "Heating": {
//                           "Value": 2,
//                           "Unit": "C",
//                           "UnitType": 17
//                       },
//                       "Cooling": {
//                           "Value": 0,
//                           "Unit": "C",
//                           "UnitType": 17
//                       }
//                   },
//                   "AirAndPollen": [
//                       {
//                           "Name": "AirQuality",
//                           "Value": 0,
//                           "Category": "Good",
//                           "CategoryValue": 1,
//                           "Type": "Ozone"
//                       },
//                       {
//                           "Name": "Grass",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Mold",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Ragweed",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "Tree",
//                           "Value": 0,
//                           "Category": "Low",
//                           "CategoryValue": 1
//                       },
//                       {
//                           "Name": "UVIndex",
//                           "Value": 3,
//                           "Category": "Moderate",
//                           "CategoryValue": 2
//                       }
//                   ],
//                   "Day": {
//                       "Icon": 6,
//                       "IconPhrase": "Mostly cloudy",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Mostly cloudy",
//                       "LongPhrase": "Mostly cloudy",
//                       "PrecipitationProbability": 1,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 1,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 13,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 206,
//                               "Localized": "SSW",
//                               "English": "SSW"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 29.6,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 227,
//                               "Localized": "SW",
//                               "English": "SW"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 49,
//                       "Evapotranspiration": {
//                           "Value": 0.1,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 5657.1,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Night": {
//                       "Icon": 35,
//                       "IconPhrase": "Partly cloudy",
//                       "HasPrecipitation": false,
//                       "ShortPhrase": "Partly cloudy",
//                       "LongPhrase": "Partly cloudy",
//                       "PrecipitationProbability": 5,
//                       "ThunderstormProbability": 0,
//                       "RainProbability": 5,
//                       "SnowProbability": 0,
//                       "IceProbability": 0,
//                       "Wind": {
//                           "Speed": {
//                               "Value": 7.4,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 151,
//                               "Localized": "SSE",
//                               "English": "SSE"
//                           }
//                       },
//                       "WindGust": {
//                           "Speed": {
//                               "Value": 24.1,
//                               "Unit": "km/h",
//                               "UnitType": 7
//                           },
//                           "Direction": {
//                               "Degrees": 164,
//                               "Localized": "SSE",
//                               "English": "SSE"
//                           }
//                       },
//                       "TotalLiquid": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Rain": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "Snow": {
//                           "Value": 0,
//                           "Unit": "cm",
//                           "UnitType": 4
//                       },
//                       "Ice": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "HoursOfPrecipitation": 0,
//                       "HoursOfRain": 0,
//                       "HoursOfSnow": 0,
//                       "HoursOfIce": 0,
//                       "CloudCover": 67,
//                       "Evapotranspiration": {
//                           "Value": 0,
//                           "Unit": "mm",
//                           "UnitType": 3
//                       },
//                       "SolarIrradiance": {
//                           "Value": 0,
//                           "Unit": "W/m²",
//                           "UnitType": 33
//                       }
//                   },
//                   "Sources": [
//                       "AccuWeather"
//                   ],
//                   "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
//                   "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
//               }
//           ]
//       }
//   }
// };

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

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const apiKey = "2c246579d56362e0dc74c9086c2aad1e";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-screen relative bg-black bg-opacity-40 text-white app">
      <div className="text-center p-[1rem]">
        <input
          className="p-[0.7rem 1.5rem] text-black text-lg rounded-xl border border-opacity-80 bg-opacity-80 bg-white placeholder-py-2 px-4 py-2"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <p className="text-center font-semibold italic text-">&#x26C5;  Weather Coverage&#x1F327;
      </p>

      <div className="max-w-[700px] h-[700px] mx-auto px-4 relative top-[10%] flex flex-col justify-between">
        <div className="w-full my-4 mx-auto">
          <div>
            {/* console.log({data.name}) */}
            <p className="text-[1.6rem]">{data.name}</p>
          </div>
          <div>
            {data.main ? (
              <h1 className="text-[6rem] font-semibold">
                {data.main.temp.toFixed()}&deg;F
              </h1>
            ) : null}
          </div>
          <div className="cloud">
            {data.weather ? (
              <p className="text-[2rem]">{data.weather[0].main}</p>
            ) : null}
          </div>
        </div>
        {data.name != undefined && (
          <div className="flex justify-evenly items-center text-center w-full my-4 p-4 rounded-lg bg-opacity-20 bg-white mb-32">
            <div>
              {data.main ? (
                <p className="text-[1.6rem] font-bold">
                  {data.main.feels_like.toFixed()}&deg;F
                </p>
              ) : null}
              <p className="font-bold">Feels Like</p>
            </div>
            <div>
              {data.main ? (
                <p className="text-[1.6rem] font-bold">{data.main.humidity}%</p>
              ) : null}
              <p className="font-bold">Humidity</p>
            </div>
            <div>
              {data.wind ? (
                <p className="font-bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p className="font-bold">Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

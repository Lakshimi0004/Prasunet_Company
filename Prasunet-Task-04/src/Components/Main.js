import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const API_KEY = 'b745ab624cb64257b1bf67e58e203c10';

const Main = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    fetchWeatherData(city);
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const fetchWeatherData = (cityOrLat, lon) => {
    let url;
    if (typeof cityOrLat === 'string') {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${cityOrLat}&appid=${API_KEY}`;
    } else {
      url = `http://api.openweathermap.org/data/2.5/weather?lat=${cityOrLat}&lon=${lon}&appid=${API_KEY}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const displayWeatherData = () => {
    if (loading) return <p className="animate-pulse">Loading...</p>;
    if (!weatherData) return <p>No data found</p>;
    if (!weatherData.main) return <p>Error: Unable to fetch weather data</p>;

    const { main, weather, wind } = weatherData;
    const { temp, humidity } = main;
    const { description, icon } = weather[0];
    const { speed } = wind;
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{weatherData.name}</h3>
        <p className="text-lg mb-2">Temperature: {(temp - 273.15).toFixed(2)}°C</p>
        <p className="text-lg mb-2">Humidity: {humidity}%</p>
        <p className="text-lg mb-2">Wind Speed: {speed} m/s</p>
        <p className="text-lg mb-2 capitalize">Weather: {description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-20 h-20 mb-4 mx-auto bg-blue-500 rounded-full"
        />
      </div>
    );
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-blue-100 to-blue-300"
      // style={{
      //   backgroundImage: 'linear-gradient(to bottom, #f7f7f7, #e7e7e7)',
      // }}
    >
      <div
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/564x/e6/b6/1b/e6b61b74acc117666bc7cd081ffc15da.jpg)',
          backgroundSize: 'cover',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Weather App</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            placeholder="Enter city name"
            type="text"
            value={city}
            onChange={handleCityChange}
            className="flex-1 h-10 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
            onClick={handleSearch}
          >
            <FaSearch className="w-5 h-5" />
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleLocation}
          >
            Use Current Location
          </button>
        </div>
        <div className="weather-data">
          {displayWeatherData()}
        </div>
      </div>
    </div>
  );
};

export default Main;

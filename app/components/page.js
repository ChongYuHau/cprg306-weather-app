"use client";
import { useState } from 'react';
import PostalCodeInput from './postal_code_input';
import DisplayWeather from './display_weather';
import { fetchWeatherByPostalCode } from './weather_fetch';
 
export default function Page() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
 
  const handlePostalCodeSubmit = async (postalCode) => {
    try {
      const weatherData = await fetchWeatherByPostalCode(postalCode);
      setWeather(weatherData);
      setError('');
    } catch (err) {
      setError('Error fetching weather data.');
      setWeather(null);
    }
  };
 
  return (
    <div>
      {!weather && !error && <PostalCodeInput onSubmit={handlePostalCodeSubmit} />}
      {weather && <DisplayWeather weather={weather} />}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
}
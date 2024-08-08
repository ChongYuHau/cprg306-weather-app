"use client";

export default function DisplayWeather({ weather }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-lg font-bold text-gray-700 mb-4">Weather Information</h1>
      {weather ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-2">Weather in {weather.name}</h2>
          <p className="text-gray-700">Temperature: {weather.main.temp}°C</p>
          <p className="text-gray-700">Description: {weather.weather[0].description}</p>
          <p className="text-gray-700">Humidity: {weather.main.humidity}%</p>
          <p className="text-gray-700">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p className="text-gray-700">Loading weather data...</p>
      )}
    </div>
  );
}

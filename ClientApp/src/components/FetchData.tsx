import React, { useEffect, useState } from 'react';

interface Forecast {
  date: string,
  temperatureC: number,
  temperatureF: number,
  summary: string
}

export const FetchData = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>();
  const [loading, setLoading] = useState(true);

  const renderForecastsTable = () => {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts?.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  const populateWeatherData = async() => {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    setForecasts(data)
    setLoading(false);
  }

  useEffect(() => {
    populateWeatherData();
  }, [])

  const contents = loading
      ? <p><em>Loading...</em></p>
      : renderForecastsTable();

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
}
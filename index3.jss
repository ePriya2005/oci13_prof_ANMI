const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
  const city = document.getElementById('city').value;
  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
  
  if (!response.ok) {
    alert('City not found!');
    return;
  }

  const data = await response.json();
  
  document.getElementById('city-name').textContent = data.name;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
  document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

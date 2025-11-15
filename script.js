const apiKey = "3e8df3c085b94385878173516251411";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Display current weather
        document.getElementById("weatherInfo").classList.remove("hidden");
        document.getElementById("cityName").innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temp").innerText = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById("condition").innerText = `Condition: ${data.current.condition.text}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById("wind").innerText = `Wind Speed: ${data.current.wind_kph} kph`;
        document.getElementById("rainProb").innerText = `Rainfall Probability: ${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

        // Prepare 5-day forecast for chart
        const labels = [];
        const temps = [];
        const rainChances = [];

        data.forecast.forecastday.forEach(day => {
            labels.push(day.date);
            temps.push(day.day.avgtemp_c);
            rainChances.push(day.day.daily_chance_of_rain);
        });

        // Display chart
        const ctx = document.getElementById('forecastChart').getContext('2d');
        document.getElementById('forecastChart').classList.remove("hidden");

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Average Temperature (°C)',
                        data: temps,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        yAxisID: 'yTemp',
                    },
                    {
                        label: 'Rainfall Probability (%)',
                        data: rainChances,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        yAxisID: 'yRain',
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: { mode: 'index', intersect: false },
                stacked: false,
                scales: {
                    yTemp: {
                        type: 'linear',
                        position: 'left',
                        title: { display: true, text: 'Temperature (°C)' }
                    },
                    yRain: {
                        type: 'linear',
                        position: 'right',
                        title: { display: true, text: 'Rainfall Probability (%)' },
                        grid: { drawOnChartArea: false }
                    }
                }
            }
        });

    } catch (error) {
        alert("City not found or API error.");
        console.error(error);
    }
}

# Weather Forecast Web App

A full-stack weather forecast web application built with **Node.js, Express, HTML, CSS, and JavaScript**, containerized using Docker, and deployment-ready for Kubernetes.

## Features

- Get 5-day weather forecasts for any city
- Dynamic frontend updates
- Backend integration with WeatherAPI
- Docker container for easy deployment
- Kubernetes deployment configuration included

## Skills Demonstrated

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, API integration
- DevOps: Docker, Kubernetes, environment variables
- Error handling, CORS, and asynchronous programming

## Setup Instructions

**Clone the repository:**
<prep>
git clone https://github.com/Gur-Teja-Dadiboyina/Weather-Forcast.git <br>
cd Weather-Forcast
</prep>

**Set your WeatherAPI key as an environment variable:** <br>
export WEATHER_API_KEY=your_api_key_here

**Run the server:** <br>
npm install <br>
node backend.js <br>

**Access the app:** <br>
Open http://localhost:3000 in your browser.<br>

## Docker 
**Build the Docker image:** <br>
docker build -t weather-forecast-app .  <br>

**Run the container:** <br>
docker run -p 3000:3000 -e WEATHER_API_KEY=your_api_key_here weather-forecast-app <br>

**Access the app:** http://localhost:3000

**Notes** <br>

Replace the default API key with your own. Never expose API keys in public repos.

CORS is enabled for all origins; restrict in production environments.

Add caching or rate-limiting for production use to avoid exceeding API limits.

**License**

Specify your license here (e.g., MIT, Apache 2.0, etc.)

---

I can also **create a LinkedIn/resume-ready version** that’s even shorter and punchier, showing this project as a **skill showcase**, if you want.  

Do you want me to create that version too?


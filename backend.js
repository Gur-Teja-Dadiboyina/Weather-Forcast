const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Serve frontend files (index.html, script.js, style.css)
app.use(express.static(path.join(__dirname)));

// Your WeatherAPI key (or use env variable)
const apiKey = process.env.WEATHER_API_KEY || "3e8df3c085b94385878173516251411";

app.get("/weather/:city", async (req, res) => {
    const city = req.params.city;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "API request failed" });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

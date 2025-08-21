# live-weather
# Live Weather App 🌤️

A responsive **Live Weather Application** built with React, allowing users to search for any city and get real-time weather information. Users can also save favorite cities and quickly access their weather data.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

[Live Demo Link](#) *(Add your deployed link here)*

---

## Features

- 🔎 Search weather by city name using OpenStreetMap & weather API  
- ⭐ Add cities to favorites and quickly view them  
- ⚡ Real-time weather data (temperature, condition, etc.)  
- 📱 Fully responsive design for mobile, tablet, and desktop  
- ⏳ Loading indicator during search  
- ❌ Error handling for invalid or empty searches  

---

## Technologies

- **Frontend:** React, Tailwind CSS  
- **Icons:** Lucide React (for loader & icons)  
- **APIs:** [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) for city search  
- **State Management:** React hooks & custom hooks  

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/live-weather.git

cd live-weather

npm install

npm start


live-weather/
├── public/
├── src/
│   ├── assets/
│   │   └── images/   # Logo and other images
│   ├── components/
│   │   └── Header.jsx
│   ├── hooks/
│   │   ├── useFavoriteData.js
│   │   └── useLocationData.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md



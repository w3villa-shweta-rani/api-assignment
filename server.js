const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;


app.get("/pokemon", async (req, res) => {
  const apiURL = "https://pokeapi.co/api/v2/pokemon/pikachu";

  try {
    const response = await axios.get(apiURL);
    console.log("✅ Success Status Code:", response.status);

    
    const rawData = response.data;

    
    const filteredData = {
      name: rawData.name,
      base_experience: rawData.base_experience,
      height: rawData.height,
      weight: rawData.weight,
      abilities: rawData.abilities.map((a) => a.ability.name),
    };

    res.json({
      status: response.status,
      message: "Data fetched successfully",
      raw: rawData,      
      filtered: filteredData, 
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});


app.get("/wrong-endpoint", async (req, res) => {
  const wrongURL = "https://pokeapi.co/api/v2/pokemonn/pikachu"; 

  try {
    const response = await axios.get(wrongURL);
    res.json({
      status: response.status,
      data: response.data,
    });
  } catch (error) {
    console.error("🚫 Wrong Endpoint Status Code:", error.response?.status || 500);
    res.status(error.response?.status || 500).json({
      error: "Invalid endpoint or resource not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

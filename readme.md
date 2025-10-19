Pokémon REST API Demo

A simple Node.js + Express application that fetches data from the public Pokémon API and displays both raw JSON and filtered output (only 5 key fields). The app also demonstrates handling success and error (wrong endpoint) responses.

🛠 Features

Fetch Pokémon data via REST API

Display raw JSON from the API

Display filtered details:

name

base_experience

height

weight

abilities

Capture status codes for both successful and failed requests

Demonstrates error handling for incorrect API endpoints

📦 Installation

Clone the repository or copy the files:

git clone <repository-url>
cd <project-folder>


Install dependencies:

npm install


Start the server:

node server.js


The server will run at:

http://localhost:3000

🔗 API Routes
✅ Correct Endpoint

URL: /pokemon

Description: Fetches data for Pokémon Pikachu (hardcoded)

Example:

http://localhost:3000/pokemon


Response Example:

{
  "status": 200,
  "message": "Data fetched successfully",
  "raw": { /* full JSON from API */ },
  "filtered": {
    "name": "pikachu",
    "base_experience": 112,
    "height": 4,
    "weight": 60,
    "abilities": ["static", "lightning-rod"]
  }
}

🚫 Wrong Endpoint

URL: /wrong-endpoint

Description: Demonstrates error handling when the API endpoint is incorrect

Example:

http://localhost:3000/wrong-endpoint


Response Example:

{
  "error": "Invalid endpoint or resource not found"
}

📖 How it Works

Axios makes a GET request to the Pokémon API.

Raw JSON from the API is captured.

Filtered output is created by extracting only 5 key fields:

name, base_experience, height, weight, abilities

Error handling is implemented for invalid API endpoints, returning the proper HTTP status code.

🛠 Tech Stack

Node.js

Express.js
